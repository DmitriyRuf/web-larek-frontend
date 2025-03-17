import {Product, OrderTotal, Order, OrderPost} from '../../index';

export interface ICatalog {
  productList: Product[];
  basketList: Product[];
  order: Order;
  orderSuccess: OrderPost;
  productSelected: Product;

  getBasketCount(): number;
  getBasketTotal(): OrderTotal;

  setProductSelected(value: Product): void;
  setOrderItems(): void;
  setOrderField<T extends never>(partName: string, field: keyof Order, value: T): void;

  updateProduct(value: Product): void;

  checkProductInBasket(value: Product): boolean;

  addBasketProduct(value: Product): void;
  deleteBasketProduct(value: Product): void;

  clearCatalog(): void;
  clearBasket(): void;
  clearOrder(): void;

}