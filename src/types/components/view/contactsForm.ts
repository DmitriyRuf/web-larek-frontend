import {Errors} from '../../index';
import {ISettings} from '../../utils/constants';

export type SettingContactsForm = ISettings['contactsForm'];

export interface IContactsForm {
  contentElement: HTMLFormElement;
  buttonNextElement: HTMLButtonElement;
  formErrorsElement: HTMLElement;
  valid: boolean;
  refresh(): void;
  renderError(errors: Errors): void;
  render(): HTMLElement;
}