import {Product, Order, OrderPost, AppEvents, Errors } from '../../types/index';
import {ICatalog} from '../../types/components/model/catalog';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';

export class Catalog implements ICatalog {
    
  protected _productList: Product[];
  protected _busketList: Product[];
  protected _orderSuccess: OrderPost;
  order: Order;
  productSelected: Product;
  errors: Errors;

  constructor(protected events: IEvents){
    this.clearCatalog();
    this.clearBusket();
    this.clearOrder();
    this.errors = {};
  };

  set productList(data: Product[]) {
    this._productList = data;
  };

  get productList() {
    return this._productList;
  };

  set busketList(data: Product[]) {
    this._busketList = data;
  };

  get busketList() {
    return this._busketList;
  };

  set orderSuccess(data: OrderPost){
    this._orderSuccess = data;
  }

  get orderSuccess() {
    return this._orderSuccess;
  };

  clearCatalog( ){
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

  clearBusket( ){
    this._busketList = [];
  };

  clearOrder(){
    this.orderSuccess = {
        id: '',
        total: 0,
    }
    this.order = {
        payment: 'online',
        address: '',
        email: '',
        phone: '',
        total: 0,
        items: [],
    }
  };

  getBasketCount(){
    return 0;
  };

  getBasketTotal(){
    return 0;
  };

  setProductSelected(value: Product){
  };

  updateProduct(value: Product){
  };

  setOrderItems(){
  };

  setOrderField(partName: string, field: string, value: string){
  };

  checkProductInBasket(value: Product){
    return false;
  };

  checkBusketList(){
    return false;
  };

  addBasketProduct(value: Product){
  };

  deleteBasketProduct(value: Product){
  };

  protected _validateOrderData(){
    return false;
  };

  protected _validateContactsData(){
    return false;
  };

}