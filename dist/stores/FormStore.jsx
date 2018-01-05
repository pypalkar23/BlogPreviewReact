import {EventEmitter} from 'events'
import Dispatcher from '../dispatchers/BlogDispatcher.jsx';
import FormActionTypes from '../constants/FormConstants.jsx';

let _formState={
    formContent:""
}




class FormStore extends EventEmitter{
    constructor(){
        super();
        Dispatcher.register(this._registerToActions.bind(this));

    }

    _registerToActions(action){
        switch(action.actionType){
            case ActionTypes.APPEND_IMAGE:
                //
        }
    }
}


export default new FormStore();