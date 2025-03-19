import {IOrderForm, SettingOrderForm} from '../../types/components/view/orderForm';
import {IActions, Errors} from '../../types/index';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';
import {ensureAllElements, ensureElement, cloneTemplate} from '../../utils/utils';

export class OrderForm implements IOrderForm {

  contentElement: HTMLFormElement;
  buttonListElement: HTMLButtonElement[];
  buttonNextElement: HTMLButtonElement;
  formErrorsElement: HTMLElement;
  protected _orderFormSetting: SettingOrderForm;

  constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions){
      this._orderFormSetting = SETTINGS['orderForm']; 
      this.contentElement = cloneTemplate(template);
      this.buttonListElement = ensureAllElements<HTMLButtonElement>(this._orderFormSetting.buttonListSelector,this.contentElement);
      this.buttonNextElement = ensureElement<HTMLButtonElement>(this._orderFormSetting.buttonNextSelector,this.contentElement);
      this.formErrorsElement = ensureElement<HTMLElement>(this._orderFormSetting.formErrorSelector,this.contentElement);

      this.buttonListElement.forEach(button => {
        button.addEventListener('click', () => {
          const value = button.name;
          const field = 'Payment'; 
          this.payment = value;
          const partName = this._orderFormSetting.templateId;
          events.emit(SETTINGS.appEvents.eventPaymentSelect, { partName, field , value });
        });
      });

      this.contentElement.addEventListener('input', (event: Event) => {
        const target = event.target as HTMLInputElement;
        const field = target.name;
        const value = target.value;  
        const partName = this._orderFormSetting.templateId;
        this.events.emit(SETTINGS.appEvents.eventOrderChange, { partName, field, value });
      });

      this.contentElement.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        this.events.emit(SETTINGS.appEvents.eventContactsOpen);
      });
  };

  set payment(paymentType: string){
    this.buttonListElement.forEach(button => {
      button.classList.toggle(this._orderFormSetting.activebuttonClass, button.name === paymentType);
    });
  };
    
  set valid(value: boolean) {
    this.buttonNextElement.disabled = !value;
  };
    
  refresh(){
    const errors: Errors = {};
    this.renderError(errors);
    this.valid = false;
    this.contentElement.reset();
  };

  renderError(errors: Errors){
    const { payment, address } = errors;
    this.formErrorsElement.textContent = Object.values({address, payment}).filter(i => !!i).join('; ');
  };

  render(){
        return this.contentElement;
  };

  }