import {ICardPreview, SettingCardPreview} from '../../types/components/view/cardPreview';
import {Product, IActions} from '../../types/index';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';
import {CardCatalog} from './cardCatalog';
import {ensureElement} from '../../utils/utils';

export class CardPreview extends CardCatalog implements ICardPreview {

    contentElement: HTMLElement;
    descriptionElement: HTMLElement;
    buttonElement: HTMLButtonElement;
    protected _cardPreviewSetting: SettingCardPreview;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions ){
        super(template, events);    
        this._cardPreviewSetting = SETTINGS['cardPreview'];         
        this.descriptionElement = ensureElement<HTMLElement>(this._cardPreviewSetting.descriptionSelector,this.contentElement);
        this.buttonElement = ensureElement<HTMLButtonElement>(this._cardPreviewSetting.buttonSelector,this.contentElement);   
        
        this.buttonElement.addEventListener('click', () => {
            this.events.emit(SETTINGS.appEvents.eventProductAdd);
        });
    };

    setButtonEnabled(data: Product){
        if(!data.price){
            this.buttonElement.setAttribute('disabled', 'true');
        }else{
            this.buttonElement.removeAttribute('disabled');
        };
    };

    setButtonText(value: boolean){
        this.buttonElement.textContent = value ? this._cardPreviewSetting.textAdd : this._cardPreviewSetting.textDelete;
    };

    render(data: Product){
        this.category = data.category;
        this.titleElement.textContent = data.title;
        this.imageElement.src = data.image;
        this.imageElement.alt = data.title;
        this.priceElement.textContent = this.setPrice(data.price);
        this.descriptionElement.textContent = data.description;
        return this.contentElement;
    };
    
  }