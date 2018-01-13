import {EventEmitter} from 'events'
import Dispatcher from '../dispatchers/BlogDispatcher.jsx';
import ActionTypes from '../constants/FormConstants.jsx';

let _formState = {
    imageObject:''
}

const FORM_STORE_EVENT="FORM_STORE_EVENT";

class FormStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bind(this));

    }

    _registerToActions(action) {
        switch (action.actionType) {
            case ActionTypes.APPEND_IMAGE:
                this._appendImageToContent(action.payload);
                break;
        }
    }

    getImagetoAppend(){
        return _formState.imageObject;
    }

    _appendImageToContent(image){
        _formState.imageObject=image
        this.emit(FORM_STORE_EVENT);
    }

     addChangeListener(callback) {
        this.on(FORM_STORE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(FORM_STORE_EVENT, callback);
    }

}


export default new FormStore();