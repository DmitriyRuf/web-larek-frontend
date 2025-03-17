import {Errors} from '../../index';
import {ISettings} from '../../utils/constants';

export type SettingOrderForm = ISettings['orderForm'];

export interface IOrderForm {
  contentElement: HTMLFormElement;
  buttonListElement: HTMLButtonElement[];
  buttonNextElement: HTMLButtonElement;
  formErrorsElement: HTMLElement;
  payment: string;
  valid: boolean;
  refresh(): void;
  renderError(errors: Errors): void;
  render(): HTMLElement;
}