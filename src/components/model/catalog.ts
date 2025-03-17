import {Product, Order, OrderPost, Errors } from '../../types/index';
import {ICatalog} from '../../types/components/model/catalog';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';

export class Catalog implements ICatalog {
    
  protected _productList: Product[];
  protected _basketList: Product[];
  protected _orderSuccess: OrderPost;
  protected _order: Order;
  productSelected: Product;
  errors: Errors = {};

  constructor(protected events: IEvents){
    this.clearCatalog();
    this.clearBasket();
    this.clearOrder();
    this.errors = {};
  };

  set productList(data: Product[]){
    this._productList = data;
    this.events.emit(SETTINGS.appEvents.eventCatalogChange);
  };

  get productList(){
    return this._productList;
  };

  set basketList(data: Product[]){
    this._basketList = data;
  };

  get basketList(){
    return this._basketList;
  };

  set order(data: Order){
    this._order = data;
  }

  get order(){
    return this._order;
  };

  set orderSuccess(data: OrderPost){
    this._orderSuccess = data;
  }

  get orderSuccess(){
    return this._orderSuccess;
  };

  getBasketCount(){
    return this._basketList.length;
  };

  getBasketTotal(){
    return this._basketList.reduce(function(total, product) { return total + Number(product.price); }, 0);
  };

  setProductSelected(value: Product){
    this.productSelected = value;
    this.events.emit(SETTINGS.appEvents.eventProductOpen, this.productSelected);
  };

  setOrderItems(){
    this._order.items = this._basketList.map(product => product.id);
    this._order.total = this.getBasketTotal();
  };

  setOrderField<T extends never>(partName: string, field: keyof Order, value: T){
    this._order[field] = value;

    if(partName === SETTINGS.orderForm.templateId){
      this._validateOrderData();
    }else if(partName === SETTINGS.contactsForm.templateId){
      this._validateContactsData();
    };
  };

  protected _validateOrderData(){
    const errors: typeof this.errors = {};
  
    if (!this._order.payment) {
      errors.payment = SETTINGS.formatData.payment.emptyError;
    };
    
    if(!this._order.address){
      errors.address = SETTINGS.formatData.address.emptyError;
    }else if(!SETTINGS.formatData.address.regexp.test(this._order.address)){
      errors.address = SETTINGS.formatData.address.regexpError;
    };

    this.errors = errors;
    this.events.emit(SETTINGS.appEvents.eventOrderError, this.errors);
    return Object.keys(errors).length === 0;
  };

  protected _validateContactsData(){
    const errors: typeof this.errors = {};

    if (!this._order.email) {
      errors.email = SETTINGS.formatData.email.emptyError;
    }else if(!SETTINGS.formatData.email.regexp.test(this._order.email)){
      errors.email = SETTINGS.formatData.email.regexpError;
    };

    if(!this._order.phone){
      errors.phone = SETTINGS.formatData.phone.emptyError;
    }else if(!SETTINGS.formatData.phone.regexp.test(this._order.phone)){
      errors.phone = SETTINGS.formatData.phone.regexpError;
    };

    this.errors = errors;
    this.events.emit(SETTINGS.appEvents.eventContactsError, this.errors);
    return Object.keys(errors).length === 0;
  };

  updateProduct(value: Product){
    const product = this._productList.find(product => {
      return product.id === value.id;
    });

    if (product !== undefined) {
      product.category = value.category;
      product.title = value.title;
      product.description = value.description;
      product.image = value.image;
      product.price = value.price;
    };
  };

  checkProductInBasket(value: Product){
    const product = this._basketList.find(product => {
      return product.id === value.id
    });

    if (product !== undefined) {
      return true;
    }else{
      return false;
    }
  };

  addBasketProduct(value: Product){
    this._basketList.push(value);
  };

  deleteBasketProduct(value: Product){
    this._basketList = this._basketList.filter((product) => product.id !== value.id);
  };

  clearCatalog(){
    this._productList = [];
    this.productSelected = {
        id: '',
        title: '',
        category: 'другое',
        description: '',
        image: '',
        price: null,
    }
  };

  clearBasket(){
    this._basketList = [];
  };

  clearOrder(){
    this._orderSuccess = {
        id: '',
        total: 0,
    }
    this._order = {
        payment: 'card',
        address: '',
        email: '',
        phone: '',
        total: 0,
        items: [],
    }
  };

}