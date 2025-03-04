import {ISuccessForm, SettingSuccessForm} from '../../types/components/view/successForm';
import {IEvents} from '../../types/components/base/events';
import {IActions, OrderTotal} from '../../types/index';
import {SETTINGS} from '../../utils/constants';

export class SuccessForm implements ISuccessForm {

    contentElement: HTMLElement;
    closeButtonElement: HTMLButtonElement;
    successDescriptionElement: HTMLElement;
    protected _successFormSetting: SettingSuccessForm;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions){
        this._successFormSetting = SETTINGS['successForm']; 
    };

    render(total: OrderTotal){
        return this.contentElement;
    };

  }