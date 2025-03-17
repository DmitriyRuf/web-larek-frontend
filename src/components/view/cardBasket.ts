import {Product, IActions} from '../../types/index';
import {ICardBasket, SettingCardBasket} from '../../types/components/view/cardBasket';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';
import {CardCatalog} from './cardCatalog';
import {ensureElement} from '../../utils/utils';

export class CardBasket extends CardCatalog implements ICardBasket {

    contentElement: HTMLElement;
    indexElement: HTMLElement;
    buttonDeleteElement: HTMLButtonElement;
    protected _basketCardSetting: SettingCardBasket;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions ){
        super(template, events);   
        this._basketCardSetting = SETTINGS['cardBasket'];             
        this.indexElement = ensureElement<HTMLElement>(this._basketCardSetting.indexCardSelector,this.contentElement);
        this.buttonDeleteElement = ensureElement<HTMLButtonElement>(this._basketCardSetting.buttonDeleteSelector,this.contentElement);   
                
        if (actions?.onClick) {
			this.buttonDeleteElement .addEventListener('click', actions.onClick);
		}
    };

    render(data: Product, index: number){
        this.indexElement.textContent = String(index);
		this.titleElement.textContent = data.title;
		this.priceElement.textContent = this.setPrice(data.price);
        return this.contentElement;
    };
    
  }