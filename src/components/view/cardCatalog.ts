import {ICardCatalog, SettingCardCatalog} from '../../types/components/view/cardCatalog';
import {Product, IActions, ProductCategory, ProductPrice} from '../../types/index';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';
import {ensureElement, cloneTemplate} from '../../utils/utils';

export class CardCatalog implements ICardCatalog {

    contentElement: HTMLElement;
    titleElement: HTMLElement;
    priceElement: HTMLElement;
    categoryElement: HTMLElement;
    imageElement: HTMLImageElement;
    protected _cardCatalogSetting: SettingCardCatalog;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions ){
        this._cardCatalogSetting = SETTINGS['cardCatalog'];  
        this.contentElement = cloneTemplate(template);
		this.titleElement = ensureElement<HTMLElement>(this._cardCatalogSetting.titleSelector,this.contentElement);
        this.priceElement = ensureElement<HTMLElement>(this._cardCatalogSetting.priceSelector,this.contentElement);
        
        if(this.contentElement.querySelector(this._cardCatalogSetting.categorySelector)){
            this.categoryElement = ensureElement<HTMLElement>(this._cardCatalogSetting.categorySelector,this.contentElement);
        };
        if(this.contentElement.querySelector(this._cardCatalogSetting.imageSelector)){
            this.imageElement = ensureElement<HTMLImageElement>(this._cardCatalogSetting.imageSelector,this.contentElement);
        };

        if (actions?.onClick){
            this.contentElement.addEventListener('click', actions.onClick);
        };
    };

    set category(value: ProductCategory){  
        if(this.categoryElement){
            this.categoryElement.textContent = value;
            this.categoryElement.classList.add(SETTINGS.formatView.categoryColorClass[value]);
        }; 
    }

    protected setPrice(value: ProductPrice): string{  
        if (value === null) {
            return SETTINGS.formatData.formatPriceNull;
        } else {
          return SETTINGS.formatData.formatCurrency(value);
        };
    }

    render(data: Product, index?: number){
        this.category = data.category;
        this.titleElement.textContent = data.title;
        this.imageElement.src = data.image;
        this.imageElement.alt = data.title;
        this.priceElement.textContent = this.setPrice(data.price);
        return this.contentElement;
    };
    
  }