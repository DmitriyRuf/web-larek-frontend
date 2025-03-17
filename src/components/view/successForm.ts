import {ISuccessForm, SettingSuccessForm} from '../../types/components/view/successForm';
import {IEvents} from '../../types/components/base/events';
import {IActions, OrderTotal} from '../../types/index';
import {SETTINGS} from '../../utils/constants';
import {ensureElement, cloneTemplate} from '../../utils/utils';

export class SuccessForm implements ISuccessForm {

    contentElement: HTMLElement;
    titleElement: HTMLElement;
    closeButtonElement: HTMLButtonElement;
    successDescriptionElement: HTMLElement;
    protected _successFormSetting: SettingSuccessForm;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions){
        this._successFormSetting = SETTINGS['successForm']; 
        this.contentElement = cloneTemplate(template);
        this.titleElement = ensureElement<HTMLElement>(this._successFormSetting.titleSelector,this.contentElement);
        this.closeButtonElement = ensureElement<HTMLButtonElement>(this._successFormSetting.buttonCloseSelector,this.contentElement);
        this.successDescriptionElement = ensureElement<HTMLElement>(this._successFormSetting.descriptionSelector,this.contentElement); 

        this.closeButtonElement.addEventListener('click', () => {
            events.emit(SETTINGS.appEvents.eventSuccessClose);
        });
    };

    refresh(){
        this.titleElement.textContent = this._successFormSetting.textTitleSuccess;
        this.successDescriptionElement.textContent = '';
        this.closeButtonElement.textContent = this._successFormSetting.textButtonSuccess;
        this.contentElement.classList.remove(this._successFormSetting.classError);
    };

    renderError(error: string){
        this.titleElement.textContent = this._successFormSetting.textTitleError;
        this.successDescriptionElement.textContent = error;
        this.closeButtonElement.textContent = this._successFormSetting.textButtonError;
        this.contentElement.classList.add(this._successFormSetting.classError);
        return this.contentElement;
    };

    render(total: OrderTotal){
        this.refresh();
        this.successDescriptionElement.textContent = this._successFormSetting.textTotal(total);
        return this.contentElement;
    };

  }