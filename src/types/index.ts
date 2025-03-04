import {ISettings} from "./utils/constants";
/**
* Базовые типы приложения
*/
export type Payment = 'cash' | 'online';
export type Category = "софт-скил" | "хард-скил" | "кнопка" | "дополнительное" | "другое" ;

export type ProductId = string;
export type ProductDescription = string;
export type ProductImage = string;
export type ProductTitle = string;
export type ProductCategory = Category;
export type ProductPrice = number | null;

export type OrderId = string;
export type OrderPayment = Payment;
export type OrderEmail = string;
export type OrderPhone = string;
export type OrderAddress = string;
export type OrderTotal = number;

export type Error = string;

  export type Product = {
	id: ProductId;
	description:  ProductDescription;
	image: ProductImage;
	title: ProductTitle;
	category: ProductCategory;
	price: ProductPrice;
};

export type Order = {
	payment: OrderPayment;
	email: OrderEmail;
	phone: OrderPhone;
	address: OrderAddress;
	total: OrderTotal;
	items: ProductId[];
};

export type OrderPost = {
	id: OrderId;
	total: OrderTotal;
};

export interface IActions {
    onClick: (event: MouseEvent) => void;
  }

export type Errors = Partial<Record<keyof Order, Error>>;

export type AppEvents = ISettings['appEvents'];
export type FormatData = ISettings['formatData'];
export type FormatView = ISettings['formatView'];