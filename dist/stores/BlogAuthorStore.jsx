import {EventEmitter} from 'events';
import Dispatcher from '../dispatchers/BlogDispatcher.jsx';
import BlogActionTypes from '../constants/Blogconstants.jsx';

const CHANGE_AUTHOR_EVENT='CHANGE_BLOG_AUTHOR';
let _blogData={
        author:'\u00A0',
        }



class BlogAuthorStore extends EventEmitter{
    constructor(){
        super();
        Dispatcher.register(this._registerToActions.bind(this));
    }

    getAuthor(){
        if(_blogData.author!=='\u00A0')
            return "By ".concat(_blogData.author," on "+new Date().toLocaleString('en-IN'));
        return _blogData.author;
    }

    _registerToActions(action){
        switch(action.actionType){
            case BlogActionTypes.REFRESH_AUTHOR:
                this._setAuthor(action.payload);
                break;
            case BlogActionTypes.RESET_AUTHOR:
                this._resetAuthor();
                break;
        }
    }

    _setAuthor(author){
        //console.log('heading: '+ heading +'$');
        _blogData.author=author;
        this.emit(CHANGE_AUTHOR_EVENT);
    }

    _resetAuthor(){
       _blogData.author='\u00A0';
       this.emit(CHANGE_AUTHOR_EVENT);
    }

    addChangeListener(callback){
        this.on(CHANGE_AUTHOR_EVENT,callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_AUTHOR_EVENT,callback);
    }
}

export default new BlogAuthorStore();