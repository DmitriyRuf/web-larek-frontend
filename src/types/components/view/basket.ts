import {ISettings} from '../../utils/constants';

export type SettingBasket = ISettings['basket'];

export interface IBasket {
    contentElement: HTMLElement;
    productListElement: HTMLElement;
    buttonElement: HTMLButtonElement;
    basketTotalElement: HTMLElement;
    render( ): HTMLElement;
  }