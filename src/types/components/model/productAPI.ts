import {ProductId, Product, Order, OrderPost} from '../../index';

export interface IProductAPI {
    cdn: string;
    items: Product[];
    getProductList: () => Promise<Product[]>;
    getProduct: (id: ProductId) => Promise<Product>;
    postOrder: (order: Order) => Promise<OrderPost>;
  }