import {ICardPreview, SettingCardPreview} from '../../types/components/view/cardPreview';
import {Product, IActions} from '../../types/index';
import {IEvents} from '../../types/components/base/events';
import {SETTINGS} from '../../utils/constants';
import {CardCatalog} from './cardCatalog';

export class CardPreview extends CardCatalog implements ICardPreview {

    contentElement: HTMLElement;
    descriptionElement: HTMLElement;
    buttonElement: HTMLButtonElement;
    protected _cardPreviewSetting: SettingCardPreview;

    constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions ){
        super(template, events, actions);    
        this._cardPreviewSetting = SETTINGS['cardPreview'];                
    };

    setButtonEnabled(data: Product){
    };

    setButtonText(value: string){
    };

    render(data: Product){
        return this.contentElement;
    };
    
  }