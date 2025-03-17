import {IContactsForm, SettingContactsForm} from '../../types/components/view/contactsForm';
import {IActions, Errors} from '../../types/index';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';
import {ensureElement, cloneTemplate} from '../../utils/utils';

export class ContactsForm implements IContactsForm {

    contentElement: HTMLFormElement;
    buttonNextElement: HTMLButtonElement;
    formErrorsElement: HTMLElement;
    protected _contactsFormSetting: SettingContactsForm;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions){
        this._contactsFormSetting = SETTINGS['contactsForm']; 
        this.contentElement = cloneTemplate(template);
        this.buttonNextElement = ensureElement<HTMLButtonElement>(this._contactsFormSetting.buttonNextSelector,this.contentElement);
        this.formErrorsElement = ensureElement<HTMLElement>(this._contactsFormSetting.formErrorSelector,this.contentElement);

        this.contentElement.addEventListener('input', (event: Event) => {
            const target = event.target as HTMLInputElement;
            const field = target.name;
            const value = target.value;  
            const partName = this._contactsFormSetting.templateId;
            this.events.emit(SETTINGS.appEvents.eventContactsChange, { partName, field, value });
          });

        this.contentElement.addEventListener('submit', (event: Event) => {
            event.preventDefault();
            this.events.emit(SETTINGS.appEvents.eventOrderSubmit);
          });
    };

    set valid(value: boolean){
        this.buttonNextElement.disabled = !value;
    };

    refresh(){ 
        let errors: Errors = {};
        this.renderError(errors);
        this.valid = false;
        this.contentElement.reset(); 
    };

    renderError(errors: Errors){
        const { email, phone } = errors;
        this.valid = !email && !phone;
        this.formErrorsElement.textContent = Object.values({email, phone}).filter(i => !!i).join('; ');
    };

    render(){
        return this.contentElement;
    };

  }