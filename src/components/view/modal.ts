import {IModal, SettingModal} from '../../types/components/view/modal';
import {ensureElement} from '../../utils/utils';
import {IEvents} from '../../types/components/base/events';
import {IActions} from '../../types/index';
import {SETTINGS} from '../../utils/constants';

export class Modal implements IModal {

    contentElement: HTMLElement;
    closeButtonElement: HTMLButtonElement;
    protected _modalSetting: SettingModal;
    protected _content: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents, actions?: IActions){
        this._modalSetting = SETTINGS['modal']; 
        this.contentElement = container;
        this.closeButtonElement = ensureElement<HTMLButtonElement>(this._modalSetting.closeButtonSelector,container);
        this._content = ensureElement<HTMLElement>(this._modalSetting.contentSelector, container);

        this.closeButtonElement.addEventListener('click', this.close.bind(this));
		this.contentElement.addEventListener('click', this.close.bind(this));
		this._content.addEventListener('click', (event) => event.stopPropagation());
    };

    set content(value: HTMLElement){
        this._content.replaceChildren(value);
    }

    open(){
        this.contentElement.classList.add(this._modalSetting.activeClass);
        this.events.emit(SETTINGS.appEvents.eventOpen);
    };

    close(){
        this.contentElement.classList.remove(this._modalSetting.activeClass);
        this.content = null;
		this.events.emit(SETTINGS.appEvents.eventClose);
    };

    render(){
        this.open( );
        return this.contentElement;
    };

  }