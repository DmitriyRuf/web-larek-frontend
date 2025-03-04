import {Product, OrderTotal, Order, OrderPost} from '../../index';

export interface ICatalog {
  productList: Product[];
  busketList: Product[];
  order: Order;
  orderSuccess: OrderPost;
  productSelected: Product;

  getBasketCount(): number;
  getBasketTotal(): OrderTotal;

  setProductSelected(value: Product): void;
  updateProduct(value: Product): void;
  setOrderItems(): void;
  setOrderField(partName: string, field: string, value: string): void;

  checkProductInBasket(value: Product): boolean;
  checkBusketList(): boolean;

  addBasketProduct(value: Product): void;
  deleteBasketProduct(value: Product): void;

  clearCatalog(): void;
  clearBusket(): void;
  clearOrder(): void;

}