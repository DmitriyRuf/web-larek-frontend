import {OrderTotal} from '../../index';
import {ISettings} from '../../utils/constants';

export type SettingSuccessForm = ISettings['successForm'];

export interface ISuccessForm {
  contentElement: HTMLElement;
  closeButtonElement: HTMLButtonElement;
  successDescriptionElement: HTMLElement;
  render(total: OrderTotal): HTMLElement;
}