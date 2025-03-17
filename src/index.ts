import './scss/styles.scss';
import {API_URL, CDN_URL, SETTINGS} from "./utils/constants";
import {ensureElement} from "./utils/utils";
import {EventEmitter} from "./components/base/events";
import {ProductAPI} from './components/model/productAPI';
import {Catalog} from './components/model/catalog';
import {CatalogPage} from './components/view/catalogPage';
import {Basket} from './components/view/basket';
import {Modal} from './components/view/modal';
import {CardCatalog} from './components/view/cardCatalog';
import {CardPreview} from './components/view/cardPreview';
import {CardBasket} from './components/view/cardBasket';
import {ContactsForm} from './components/view/contactsForm';
import {OrderForm} from './components/view/orderForm';
import {SuccessForm} from './components/view/successForm';
import {Order, Product, Errors} from './types/index';

//Брокер событий
const events = new EventEmitter();

//Мониторинг событий
events.onAll(({eventName, data }) => {
    console.log(eventName, data);
});

//Модель данных
const productAPI = new ProductAPI(CDN_URL, API_URL);
const catalog = new Catalog(events);
//Шаблоны
const basketTemplate = ensureElement<HTMLTemplateElement>(SETTINGS.basket.templateId);
const cardCatalogTemplate = ensureElement<HTMLTemplateElement>(SETTINGS.cardCatalog.templateId);
const cardPreviewTemplate = ensureElement<HTMLTemplateElement>(SETTINGS.cardPreview.templateId);
const cardBasketTemplate = ensureElement<HTMLTemplateElement>(SETTINGS.cardBasket.templateId);
const orderTemplate = ensureElement<HTMLTemplateElement>(SETTINGS.orderForm.templateId);
const contactsTemplate = ensureElement<HTMLTemplateElement>(SETTINGS.contactsForm.templateId);
const successTemplate = ensureElement<HTMLTemplateElement>(SETTINGS.successForm.templateId);
//Глобальные контейнеры
const catalogPage = new CatalogPage(document.body, events);
const modal = new Modal(ensureElement<HTMLElement>(SETTINGS.modal.id), events);
//Представления
const basket = new Basket(basketTemplate, events);
const cardPreview = new CardPreview(cardPreviewTemplate, events);
const orderForm = new OrderForm(orderTemplate, events);
const contactsForm = new ContactsForm(contactsTemplate, events);
const successForm = new SuccessForm(successTemplate, events);

/**Функции презентера**/
//Получить список представлений продуктов карзины
function getBasketList(): HTMLElement[] {
    let index = 0;
    return catalog.basketList.map((product) => {
        const cardBasket = new CardBasket(cardBasketTemplate, events, 
                                          { onClick: () => events.emit(SETTINGS.appEvents.eventBasketDelete, product) });
        return cardBasket.render(product, index += 1); 
    });
};

/**События Каталога**/
//Изменились элементы каталога
events.on(SETTINGS.appEvents.eventCatalogChange,() => {
    catalogPage.productList = catalog.productList.map(product => {
        const cardCatalog = new CardCatalog(cardCatalogTemplate, events, 
                                            { onClick: () => events.emit(SETTINGS.appEvents.eventProductSelect, product)});
        return cardCatalog.render(product); 
    });
    catalogPage.couterBasket = catalog.getBasketCount();
});

/**События Карточек продуктов каталога**/
//Сохраняем в модели выбранную карточку продукта
events.on(SETTINGS.appEvents.eventProductSelect,(product: Product) => { 
    catalogPage.viewPreloader(true);
    // Получаем продукт по Id с сервера
    productAPI.getProduct(product.id)
    .then(data => {
        product = data;
        catalog.updateProduct(product);
    })
    .catch(error => {
        console.log(error);
    })
    .finally ( ( ) => {
        catalogPage.viewPreloader(false);
        catalog.setProductSelected(product);
    });
});
//Открыть карточку продукта
events.on(SETTINGS.appEvents.eventProductOpen,(product: Product) => {
    cardPreview.setButtonText(!catalog.checkProductInBasket(product));
    cardPreview.setButtonEnabled(product);
    modal.content = cardPreview.render(product);
    modal.render();
});
//Добавить продукт в корзину или удалить
events.on(SETTINGS.appEvents.eventProductAdd, () => {
    if(catalog.checkProductInBasket(catalog.productSelected)){
        catalog.deleteBasketProduct(catalog.productSelected); 
    } else {
        catalog.addBasketProduct(catalog.productSelected); 
    }
    catalogPage.couterBasket = catalog.getBasketCount();
    cardPreview.setButtonText(!catalog.checkProductInBasket(catalog.productSelected));
  });  

/**События Корзины**/
//Открыть корзину 
events.on(SETTINGS.appEvents.eventBasketOpen, () => {
    basket.productList = getBasketList();
    basket.basketTotal = catalog.getBasketTotal();
    modal.content = basket.render();
    modal.render();
});
//Удалить продукт из корзины 
events.on(SETTINGS.appEvents.eventBasketDelete,(product: Product) => {
    catalog.deleteBasketProduct(product); 
    basket.productList = getBasketList();
    basket.basketTotal = catalog.getBasketTotal();
    catalogPage.couterBasket = catalog.getBasketCount();
});
//Открыть форму заказа
events.on(SETTINGS.appEvents.eventOrderOpen, () => {
    catalog.clearOrder();
    orderForm.payment = catalog.order.payment;
    orderForm.refresh();
    modal.content = orderForm.render();
    modal.render();
});

/**События формы заказа**/
//Установить способ оплаты формы заказа
events.on(SETTINGS.appEvents.eventPaymentSelect,(data: { partName: string, field: keyof Order, value: never }) => { 
    catalog.setOrderField(data.partName, data.field, data.value);
});
//Проверить и установить поля ввода формы заказа
events.on(SETTINGS.appEvents.eventOrderChange,(data: { partName: string, field: keyof Order, value: never }) => {
    catalog.setOrderField(data.partName, data.field, data.value);
});
//Вывод ошибок формы заказа
events.on(SETTINGS.appEvents.eventOrderError,(errors: Errors) => {
    orderForm.renderError(errors);
});

/**События формы контактов**/
//Открыть форму контактов
events.on(SETTINGS.appEvents.eventContactsOpen, () => {
    contactsForm.refresh();
    modal.content = contactsForm.render();
    modal.render();
});
//Проверить и установить поля ввода формы контактов
events.on(SETTINGS.appEvents.eventContactsChange,(data: { partName: string, field: keyof Order, value: never }) => {
    catalog.setOrderField(data.partName, data.field, data.value);
});
//Вывод ошибок формы контактов
events.on(SETTINGS.appEvents.eventContactsError, (errors: Errors) => {
    contactsForm.renderError(errors);
});
//Оформить заказ
events.on(SETTINGS.appEvents.eventOrderSubmit, () => {
    catalogPage.viewPreloader(true);
    // заполняем из корзиный позиции продуктов к оформлению и сумму оплаты
    catalog.setOrderItems();
    // отправляем заказ на оформление
    productAPI.postOrder(catalog.order)
      .then(data => {
        catalog.orderSuccess = data;
        // выводим на форму данные успешного заказа
        modal.content = successForm.render(catalog.orderSuccess.total);
        catalog.clearOrder();
        catalog.clearBasket();
        catalogPage.couterBasket = catalog.getBasketCount();
      })
      .catch(error => {
        catalog.clearOrder();
        // выводим на форму ошибку
        modal.content = successForm.renderError(error);
      })
      .finally ( ( ) => {
        catalogPage.viewPreloader(false);
        modal.render();
      });
  });

/**События формы оформленного заказа**/
//Закрытие формы успешного оформления заказа по кнопке
events.on(SETTINGS.appEvents.eventSuccessClose,() => {
    modal.close()
});

/**События модального окна**/
//Блокируем прокрутку страницы
events.on(SETTINGS.appEvents.eventOpen,() => {
    catalogPage.locked = true;
});
//Разблокируем прокрутку страницы
events.on(SETTINGS.appEvents.eventClose,() => {
    catalogPage.locked = false;
});

/**Получаем каталог продуктов с сервера**/
catalogPage.viewPreloader(true);
productAPI.getProductList()
    .then(data => {
        catalog.productList = data;
    })
    .catch(error => {
        console.log(error);
    })
    .finally (() => {
        catalogPage.viewPreloader(false);
    });


