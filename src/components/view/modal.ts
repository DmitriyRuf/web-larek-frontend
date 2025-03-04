import {IModal, SettingModal} from '../../types/components/view/modal';
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
    };

    set content(value: HTMLElement) {
    }

    open( ){
    };

    close( ){
    };

    render( ){
        return this.contentElement;
    };

  }