import './scss/styles.scss';
import {API_URL, CDN_URL, SETTINGS} from "./utils/constants";
import {cloneTemplate, createElement, ensureElement, ensureAllElements} from "./utils/utils";
import {EventEmitter} from "./components/base/events";
import {ProductAPI} from './components/model/productAPI';
import {Catalog} from './components/model/catalog';
import {CatalogPage} from './components/view/catalogPage';
import {Basket} from './components/view/basket';
import {Modal} from './components/view/modal';
import {CardCatalog} from './components/view/cardCatalog';
import {CardPreview} from './components/view/cardPreview';
import {CardBasket} from './components/view/cardBasket';
import {ContactsForm} from './components/view/contactsForm';
import {OrderForm} from './components/view/orderForm';
import {SuccessForm} from './components/view/successForm';
