import {IActions, OrderTotal} from '../../types/index';
import {IBasket, SettingBasket} from '../../types/components/view/basket';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';
import {ensureElement, cloneTemplate, createElement} from '../../utils/utils';

export class Basket implements IBasket {

    contentElement: HTMLElement;
    productListElement: HTMLElement;
    buttonElement: HTMLButtonElement;
    basketTotalElement: HTMLElement;
    protected _bascketSetting: SettingBasket;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions){
        this._bascketSetting = SETTINGS['basket'];
        this.contentElement = cloneTemplate(template);
        this.productListElement = ensureElement<HTMLElement>(this._bascketSetting.cardListSelector,this.contentElement);
        this.buttonElement = ensureElement<HTMLButtonElement>(this._bascketSetting.buttonSelector,this.contentElement);
        this.basketTotalElement = ensureElement<HTMLElement>(this._bascketSetting.priceSelector,this.contentElement);

        this.buttonElement.addEventListener('click', () => {
            events.emit(SETTINGS.appEvents.eventOrderOpen);
        });
    };

    set productList(cardList: HTMLElement[]) {
        if (cardList.length) {
            this.productListElement.replaceChildren(...cardList);
        } else {
            this.productListElement.replaceChildren(createElement<HTMLParagraphElement>('p', {
              textContent: this._bascketSetting.textEmpty})
            );
      };
    };

    set basketTotal(basketTotal: OrderTotal){
        this.basketTotalElement.textContent = SETTINGS.formatData.formatCurrency(basketTotal);
        this.buttonElement.disabled = basketTotal === 0;
    };

    render(){
        return this.contentElement;
    };

  }