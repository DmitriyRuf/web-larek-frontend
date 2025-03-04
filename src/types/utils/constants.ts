export interface ISettings {
    /**
     * Форматы данных и регулярные выражения
     */
    formatData: {
		formatCurrency: (value: number) => string;
		formatPriceNull: string;
        address: {
            regexp: RegExp;
            regexpError: string;
            emptyError: string;
        }; 
        payment: {
            emptyError: string;
        } 
        email: {
            regexp: RegExp;
            regexpError: string;
            emptyError: string;
        }; 
        phone: {
            regexp: RegExp;
            regexpError: string;
            emptyError: string;
        }; 
	};
    /**
     * Декоративные классы
     */
    formatView:{
        categoryColorClass: Record<string, string>;
    };
    /**
     * Настройки приложения
     */
    catalogPage:{
      selector: string;
      basketButtonSelector: string;
      basketCounterSelector: string;
      catalogSelector: string;
      wrapperSelector: string;
      lockedClass: string;
    };
    /**
     * События
     */
    appEvents:{
        eventCatalogChange: string;
        eventProductOpen: string;
        eventProductSelect: string;
        eventProductAdd: string;
        eventProductDelete: string;
        eventBasketOpen: string;
        eventBasketDelete: string;
        eventOrderOpen: string;
        eventOrderSubmit: string;
        eventOrderChange: string;
        eventOrderError: string;
        eventPaymentSelect: string;
        eventContactsOpen: string;
        eventContactsChange: string;
        eventContactsError: string;
        eventSuccessClose: string;
        eventOpen: string;
        eventClose: string;
    };
    /**
     * Настройки шаблона каталога продуктов
     */
    cardCatalog:{
        templateId: string;
        selector: string;
        titleSelector: string;
        priceSelector: string;
        categorySelector: string;
        imageSelector: string;
    };
    /**
     * Настройки шаблона карточки продукта
     */
    cardPreview: {
        templateId: string;
        selector: string;
        titleSelector: string;
        priceSelector: string;
        buttonSelector: string;
        categorySelector: string;
        imageSelector: string;
        descriptionSelector: string;
        textAdd: string;
        textDelete:string;
    };
    /**
     * Настройки шаблона карточки корзины
     */
    cardBasket:{
        templateId: string;
        selector: string;
        titleSelector: string;
        priceSelector: string;
        buttonDeleteSelector: string;
        indexCardSelector: string;
    };
    /**
     * Настройки шаблона корзины
     */
    basket: {
        templateId: string;
        selector: string;
        cardListSelector: string;
        buttonSelector: string;
        priceSelector: string;
        textEmpty: string;
    };
    /**
     * Настройки шаблона окна заказа
     */
    orderForm:{
        templateId: string;
        selector: string;
        buttonListSelector: string;
        activebuttonClass: string;
        InputListSelector: string;
        buttonNextSelector: string;
        formErrorSelector: string;
    };
    /**
     * Настройки шаблона окна контактов
     */
    contactsForm:{
        templateId: string;
        selector: string;
        InputListSelector: string;
        buttonNextSelector: string;
        formErrorSelector: string;
    };
    /**
     * Настройки шаблона окна успешного заказа
     */
    successForm:{
        templateId: string;
        selector: string;
        descriptionSelector: string;
        buttonCloseSelector: string;
        textTotal: (value: number) => string;
    };
    /**
     * Настройки модального окна
     */
    modal:{
        id : string;
        selector: string;
        closeButtonSelector: string;
        contentSelector: string;
        activeClass: string;
        
    };
}
