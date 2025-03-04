import {ICardCatalog, SettingCardCatalog} from '../../types/components/view/cardCatalog';
import {Product, IActions, ProductCategory} from '../../types/index';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';

export class CardCatalog implements ICardCatalog {

    contentElement: HTMLElement;
    titleElement: HTMLElement;
    priceElement: HTMLElement;
    categoryElement: HTMLElement;
    imageElement: HTMLElement;
    protected _cardCatalogSetting: SettingCardCatalog;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions ){
        this._cardCatalogSetting = SETTINGS['cardCatalog'];    
    };

    set category(value: ProductCategory){   
    }

    protected setPrice(value: number): string{  
        return ''; 
    }

    render(data: Product, index?: number){
        return this.contentElement;
    };
    
  }