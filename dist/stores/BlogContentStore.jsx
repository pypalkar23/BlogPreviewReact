import {EventEmitter} from 'events';
import Dispatcher from '../dispatchers/BlogDispatcher.jsx';
import BlogActionTypes from '../constants/Blogconstants.jsx';

const CHANGE_CONTENT_EVENT='CHANGE_CONTENT_EVENT';
let _blogData={
        content:'\u00A0',
}




class BlogContentStore extends EventEmitter{
    constructor(){
        super();
        Dispatcher.register(this._registerToActions.bind(this));

    }

    getContent(){
        return _blogData.content;
    }

    _registerToActions(action){
        switch(action.actionType){
            case BlogActionTypes.REFRESH_CONTENT:
                this._setContent(action.payload);
                break;
            case BlogActionTypes.RESET_CONTENT:
                this._resetContent();
                break;
        }
    }

    _setContent(content){
        //console.log('heading: '+ heading +'$');
        //let modContent= content.replace(/(\r|\n)/gi,'\\\\n');
        //modContent= content.replace(/ /g,'\u00A0');
        _blogData.content=content;
        this.emit(CHANGE_CONTENT_EVENT);
    }

    _resetContent(){
       _blogData.content='\u00A0';
       this.emit(CHANGE_CONTENT_EVENT);
    }

    addChangeListener(callback){
        this.on(CHANGE_CONTENT_EVENT,callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_CONTENT_EVENT,callback);
    }
}

export default new BlogContentStore();