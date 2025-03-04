import {ISettings} from '../../utils/constants';

export type SettingCatalogPage = ISettings['catalogPage'];

export interface ICatalogPage {
    contentElement: HTMLElement;
    couterBasketElement: HTMLElement;
    buttonBasketElement: HTMLButtonElement;
    catologElement: HTMLElement;
    wrapperElement: HTMLElement;
    render(): HTMLElement;
  }