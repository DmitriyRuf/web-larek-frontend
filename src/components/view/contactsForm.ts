import {IContactsForm, SettingContactsForm} from '../../types/components/view/contactsForm';
import {IActions, Order} from '../../types/index';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';

export class ContactsForm implements IContactsForm {

    contentElement: HTMLFormElement;
    inputListElement: HTMLInputElement[];
    buttonNextElement: HTMLButtonElement;
    formErrorsElement: HTMLElement;
    protected _contactsFormSetting: SettingContactsForm;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions){
        this._contactsFormSetting = SETTINGS['contactsForm']; 
    };

    refresh( ){  
    };

    set valid(value: boolean) {
    };

    renderError(errors: Partial<Order>){
        
    };

    render( ){
        return this.contentElement;
    };

  }