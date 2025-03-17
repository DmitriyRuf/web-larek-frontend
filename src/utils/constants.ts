import {ISettings} from "../types/utils/constants";

export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const SETTINGS: ISettings = {
    /**
    * Форматы данных и регулярные выражения
     */
    formatData: {
        formatCurrency: (value: number) => `${value} синапсов`,
        formatPriceNull: 'Бесценно',
        address: {
            regexp: /[а-яёА-ЯЁa-zA-Z0-9\s\/.,-]$/,
            regexpError: 'Введен некорректный адресс',
            emptyError: 'Необходимо указать адресс',
        }, 
        payment: {
            emptyError: 'Необходимо указать способ оплаты',
        }, 
        email: {
            regexp: /^\S+@\S+\.\S+$/,
            regexpError: 'Введен некорректный email',
            emptyError: 'Необходимо указать email',
        }, 
        phone: {
            regexp: /^(8|\+7)(\s|\(|-)?(\d{3})(\s|\)|-)?(\d{3})(\s|-)?(\d{2})(\s|-)?(\d{2})$/,
            regexpError: 'Введен некорректный телефон',
            emptyError: 'Необходимо указать телефон',
        }, 
    },
    /**
     * Декоративные классы
     */
    formatView:{
        categoryColorClass: {
            'софт-скил' : 'card__category_soft',
            'хард-скил' : 'card__category_hard',
            'кнопка' : 'card__category_button',
            'дополнительное' : 'card__category_additional',
            'другое' : 'card__category_other',
        },
    },
    /**
     * Настройки страницы
     */
    catalogPage:{
        selector: '.page',
        basketButtonSelector: '.header__basket',
        basketCounterSelector: '.header__basket-counter',
        catalogSelector: '.gallery',
        wrapperSelector: '.page__wrapper',
        preloaderSelector: '.preloader',
        lockedClass: 'page__wrapper_locked',
        viewPreloaderClass: 'preloader_view',
        hidePreloaderClass: 'preloader_hide',
    },
    /**
     * События
     */
    appEvents:{
        eventCatalogChange: 'catalog:change',
        eventProductSelect:'product:select',
        eventProductOpen: 'product:open',
        eventProductAdd: 'product:add',
        eventBasketOpen: 'basket:open',
        eventBasketDelete: 'basket:delete',
        eventOrderOpen: 'order:open',
        eventOrderSubmit: 'order:submit',
        eventOrderChange: 'order:change',
        eventOrderError: 'order:error',
        eventPaymentSelect: 'payment:select',
        eventContactsOpen: 'contacts:open',
        eventContactsChange: 'contacts:change',
        eventContactsError: 'contacts:error',
        eventSuccessClose: 'success:close',
        eventOpen:'modal:open',
        eventClose: 'modal:close',
      },
    /**
     * Настройки шаблона каталога продуктов
     */
    cardCatalog:{
        templateId: '#card-catalog',
        selector: '.card',
        className: 'gallery__item',
        titleSelector: '.card__title',
        priceSelector: '.card__price',
        categorySelector: '.card__category',
        imageSelector: '.card__image',
    },
    /**
     * Настройки шаблона карточки продукта
     */
    cardPreview: {
        templateId: '#card-preview',
        selector: '.card',
        className: 'card_full',
        titleSelector: '.card__title',
        priceSelector: '.card__price',
        buttonSelector: '.card__button',
        categorySelector: '.card__category',
        imageSelector: '.card__image',
        descriptionSelector: '.card__text',
        textAdd: 'В корзину',
        textDelete: 'Удалить из корзины',
    },
    /**
     * Настройки шаблона карточки корзины
     */
    cardBasket:{
        templateId: '#card-basket',
        selector: '.card',
        className: 'card_compact',
        titleSelector: '.card__title',
        priceSelector: '.card__price',
        buttonDeleteSelector: '.basket__item-delete',
        indexCardSelector: '.basket__item-index',
    },
    /**
     * Настройки шаблона корзины
     */
    basket: {
        templateId: '#basket',
        selector: '.basket',
        cardListSelector: '.basket__list',
        buttonSelector: '.basket__button',
        priceSelector: '.basket__price',
        textEmpty: 'Пусто',
    },
    /**
     * Настройки шаблона окна заказа
     */
    orderForm:{
        templateId: '#order',
        selector: '.form[name=order]',
        buttonListSelector: '.button_alt',
        activebuttonClass: 'button_alt-active',
        InputListSelector: '.form__input',
        buttonNextSelector: '.button[type=submit]',
        formErrorSelector: '.form__errors',
    },
    /**
     * Настройки шаблона окна контактов
     */
    contactsForm:{
        templateId: '#contacts',
        selector: '.form[name=contacts]',
        InputListSelector: '.form__input',
        buttonNextSelector: '.button[type=submit]',
        formErrorSelector: '.form__errors',
    },
    /**
     * Настройки шаблона окна успешного заказа
     */
    successForm:{
        templateId: '#success',
        selector: '.order-success',
        descriptionSelector: '.order-success__description',
        buttonCloseSelector: '.order-success__close',
        titleSelector: '.order-success__title',
        classError: 'order-success__error',
        textTitleSuccess: 'Заказ оформлен',
        textTitleError: 'Ошибка оформления заказа',
        textButtonSuccess: 'За новыми покупками!',
        textButtonError: 'Попробовать оформить заново',
        textTotal: (value: number) => `Списано ${value} синапсов`,
    },
    /**
     * Настройки модального окна
     */
    modal:{
        id : "#modal-container",
        selector: '.modal__content',
        closeButtonSelector: '.modal__close',
        contentSelector: '.modal__content',
        activeClass: 'modal_active',
    },
};