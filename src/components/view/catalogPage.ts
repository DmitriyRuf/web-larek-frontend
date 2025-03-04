import {ICatalogPage, SettingCatalogPage} from '../../types/components/view/catalogPage';
import {IEvents} from '../../types/components/base/events';
import {IActions} from '../../types/index';
import {SETTINGS} from '../../utils/constants';

export class CatalogPage implements ICatalogPage {

    contentElement: HTMLElement;
    couterBasketElement: HTMLElement;
    buttonBasketElement: HTMLButtonElement;
    catologElement: HTMLElement;
    wrapperElement: HTMLElement;
    protected _catalogPageSetting: SettingCatalogPage;

    constructor(container: HTMLElement, protected events: IEvents, actions?: IActions){
        this._catalogPageSetting = SETTINGS['catalogPage']; 
    };

    set locked(locked: boolean){
    };

    set cardList(cardList: HTMLElement[]) {
    };

    set couterBasket(count: number){
    };

    render( ){
        return this.contentElement;
    };

  }