import {Product, IActions} from '../../types/index';
import {IBasket, SettingBasket} from '../../types/components/view/basket';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';

export class Basket implements IBasket {

    contentElement: HTMLElement;
    productListElement: HTMLElement;
    buttonElement: HTMLButtonElement;
    basketTotalElement: HTMLElement;
    protected _bascketSetting: SettingBasket;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions){
      this._bascketSetting = SETTINGS['basket'];
    };

    set productList(cardList: HTMLElement[]) {
    };

    set basketTotal(basketTotal: number){
    };

    render( ){
        return this.contentElement;
    };

  }