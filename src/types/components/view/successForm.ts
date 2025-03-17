import {OrderTotal} from '../../index';
import {ISettings} from '../../utils/constants';

export type SettingSuccessForm = ISettings['successForm'];

export interface ISuccessForm {
  contentElement: HTMLElement;
  titleElement: HTMLElement;
  closeButtonElement: HTMLButtonElement;
  successDescriptionElement: HTMLElement;
  refresh(): void;
  render(total: OrderTotal): HTMLElement;
}