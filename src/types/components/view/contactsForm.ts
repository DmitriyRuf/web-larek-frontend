import {ISettings} from '../../utils/constants';

export type SettingContactsForm = ISettings['contactsForm'];

export interface IContactsForm {
  contentElement: HTMLFormElement;
  inputListElement: HTMLInputElement[];
  buttonNextElement: HTMLButtonElement;
  formErrorsElement: HTMLElement;
  valid: boolean;
  refresh(): void;
  render(): HTMLElement;
}