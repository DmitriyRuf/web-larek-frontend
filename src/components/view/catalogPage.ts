import {ICatalogPage, SettingCatalogPage} from '../../types/components/view/catalogPage';
import {IEvents} from '../../types/components/base/events';
import {IActions} from '../../types/index';
import {SETTINGS} from '../../utils/constants';
import {ensureElement} from '../../utils/utils';

export class CatalogPage implements ICatalogPage {

    contentElement: HTMLElement;
    couterBasketElement: HTMLElement;
    buttonBasketElement: HTMLButtonElement;
    catologElement: HTMLElement;
    wrapperElement: HTMLElement;
    preloaderElement: HTMLElement;
    protected _catalogPageSetting: SettingCatalogPage;

    constructor(container: HTMLElement, protected events: IEvents, actions?: IActions){
        this._catalogPageSetting = SETTINGS['catalogPage']; 
        this.contentElement = container;
        this.couterBasketElement = ensureElement<HTMLElement>(this._catalogPageSetting.basketCounterSelector, this.contentElement);
        this.buttonBasketElement = ensureElement<HTMLButtonElement>(this._catalogPageSetting.basketButtonSelector, this.contentElement);
        this.catologElement = ensureElement<HTMLElement>(this._catalogPageSetting.catalogSelector, this.contentElement);
        this.wrapperElement = ensureElement<HTMLElement>(this._catalogPageSetting.wrapperSelector, this.contentElement);
        this.preloaderElement = ensureElement<HTMLElement>(this._catalogPageSetting.preloaderSelector, this.contentElement);
        this.preloaderElement.classList.add(this._catalogPageSetting.viewPreloaderClass);

        this.buttonBasketElement.addEventListener('click', () => {
            this.events.emit(SETTINGS.appEvents.eventBasketOpen);
        });
    };

    set locked(locked: boolean){
        if (locked) {
            this.wrapperElement.classList.add(this._catalogPageSetting.lockedClass);
        } else {
            this.wrapperElement.classList.remove(this._catalogPageSetting.lockedClass);
        };
    };

    set productList(productList: HTMLElement[]){
        this.catologElement.replaceChildren(...productList);
    };

    set couterBasket(count: number){
        this.couterBasketElement.textContent = String(count);
    };

    viewPreloader(view: boolean){
        if (view) {
        this.preloaderElement.classList.remove(this._catalogPageSetting.hidePreloaderClass);
        } else {
        this.preloaderElement.classList.add(this._catalogPageSetting.hidePreloaderClass);
        }
    };

    render(){
        return this.contentElement;
    };

  }