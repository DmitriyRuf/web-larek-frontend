import {Product} from '../../index';
import {ISettings} from '../../utils/constants';

export type SettingCardPreview = ISettings['cardPreview'];

export interface ICardPreview {
    contentElement: HTMLElement;
    descriptionElement: HTMLElement;
    buttonElement: HTMLButtonElement;
    render(data: Product): HTMLElement;
  }