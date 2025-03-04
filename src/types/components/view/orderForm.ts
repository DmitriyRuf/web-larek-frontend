import {Payment} from '../../index';
import {ISettings} from '../../utils/constants';

export type SettingOrderForm = ISettings['orderForm'];

export interface IOrderForm {
  contentElement: HTMLFormElement;
  buttonListElement: HTMLButtonElement[];
  inputListElement: HTMLInputElement[];
  buttonNextElement: HTMLButtonElement;
  formErrorsElement: HTMLElement;
  payment: Payment;
  valid: boolean;
  refresh(): void;
  render(): HTMLElement;
}