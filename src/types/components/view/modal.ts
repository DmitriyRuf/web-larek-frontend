import {ISettings} from '../../utils/constants';

export type SettingModal = ISettings['modal'];

export interface IModal {
  contentElement: HTMLElement;
  closeButtonElement: HTMLButtonElement;
  open(): void;
  close(): void;
  render(): HTMLElement;
}