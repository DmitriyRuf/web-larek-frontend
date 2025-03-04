import {Product} from '../../index';
import {ISettings} from '../../utils/constants';

export type SettingCardBasket = ISettings['cardBasket'];

export interface ICardBasket {
    contentElement: HTMLElement;
    indexElement: HTMLElement;
    buttonDeleteElement: HTMLButtonElement;
    render(data: Product, index: number): HTMLElement;
  }