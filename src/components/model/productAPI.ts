import {IProductAPI} from '../../types/components/model/productAPI';
import {ApiListResponse} from '../../types/components/base/api';
import {Order, OrderPost, Product} from '../../types/index';
import {Api} from '../base/api';

export class ProductAPI extends Api implements IProductAPI {
    
    cdn: string;
    items: Product[];
  
    constructor(cdn: string, baseUrl: string, options?: RequestInit) {
        super(baseUrl, options);
        this.cdn = cdn;
    }
    /**
    * Каталог продуктов
    */
    getProductList(): Promise<Product[]> {
        return this.get('/product').then((data: ApiListResponse<Product>) =>
          data.items.map((item) => ({
            ...item,
            image: this.cdn + item.image,
            }))
        );
      }
    /**
    * продукт
    */
    getProduct(id: Product['id'] ): Promise<Product> {
        return this.get(`/product/${id}`).then( (item: Product) => ({
                ...item,
                image: this.cdn + item.image,
            })
        );
    }
    /**
    * отправить заказ
    */
    postOrder(order: Order): Promise<OrderPost> {
        return this.post(`/order`, order).then((data: OrderPost) => data);
    }
    
}