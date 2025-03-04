import {Product, ProductCategory} from '../../index';
import {ISettings} from '../../utils/constants';

export type SettingCardCatalog = ISettings['cardCatalog'];

export interface ICardCatalog {
    contentElement: HTMLElement;
    titleElement: HTMLElement;
    priceElement: HTMLElement;
    categoryElement: HTMLElement;
    imageElement: HTMLElement;
    category: ProductCategory;
    render(data: Product, index?: number): HTMLElement;
  }