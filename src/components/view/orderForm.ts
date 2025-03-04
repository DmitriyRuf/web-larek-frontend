import {IOrderForm, SettingOrderForm} from '../../types/components/view/orderForm';
import {IActions, Order, Payment} from '../../types/index';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';

export class OrderForm implements IOrderForm {

  contentElement: HTMLFormElement;
  buttonListElement: HTMLButtonElement[];
  inputListElement: HTMLInputElement[];
  buttonNextElement: HTMLButtonElement;
  formErrorsElement: HTMLElement;
  protected _orderFormSetting: SettingOrderForm;

  constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions){
      this._orderFormSetting = SETTINGS['orderForm']; 
  };

  set payment(paymentType: Payment) {
  }
    
  set valid(value: boolean) {
  };
    
  refresh( ){
  };

  renderError(errors: Partial<Order>){
        
  };

  render( ){
        return this.contentElement;
  };

  }