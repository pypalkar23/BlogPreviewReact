import {EventEmitter} from 'events';
import Dispatcher from '../dispatchers/BlogDispatcher.jsx';
import BlogActionTypes from '../constants/Blogconstants.jsx';

const CHANGE_HEADING_EVENT='CHANGE_BLOG_HEADING';
let _blogData={
        heading:'\u00A0',
        }




class BlogHeadingStore extends EventEmitter{
    constructor(){
        super();
        Dispatcher.register(this._registerToActions.bind(this));
    }

    getHeading(){
        return _blogData.heading;
    }

    _registerToActions(action){
        switch(action.actionType){
            case BlogActionTypes.REFRESH_HEADING:
                this._setHeading(action.payload);
                break;
            case BlogActionTypes.RESET_HEADING:
                this._resetHeading();
                break;
        }
    }

    _setHeading(heading){
        //console.log('heading: '+ heading +'$');
        _blogData.heading=heading;
        this.emit(CHANGE_HEADING_EVENT);
    }

    _resetHeading(){
       _blogData.heading='\u00A0';
       this.emit(CHANGE_HEADING_EVENT);
    }

    addChangeListener(callback){
        this.on(CHANGE_HEADING_EVENT,callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_HEADING_EVENT,callback);
    }
}

export default new BlogHeadingStore();