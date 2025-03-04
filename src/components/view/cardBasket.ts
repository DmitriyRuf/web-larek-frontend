import {Product, IActions} from '../../types/index';
import {ICardBasket, SettingCardBasket} from '../../types/components/view/cardBasket';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';
import {CardCatalog} from './cardCatalog';

export class CardBasket extends CardCatalog implements ICardBasket {

    contentElement: HTMLElement;
    indexElement: HTMLElement;
    buttonDeleteElement: HTMLButtonElement;
    protected _basketCardSetting: SettingCardBasket;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions ){
        super(template, events, actions);   
        this._basketCardSetting = SETTINGS['cardBasket'];       
    };

    render(data: Product, index: number){
        return this.contentElement;
    };
    
  }