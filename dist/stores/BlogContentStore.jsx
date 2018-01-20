import {EventEmitter} from 'events';
import Dispatcher from '../dispatchers/BlogDispatcher.jsx';
import BlogActionTypes from '../constants/Blogconstants.jsx';

const CHANGE_CONTENT_EVENT = 'CHANGE_CONTENT_EVENT';
let _blogData = {
    content: '\u00A0',
    images:{}
}


class BlogContentStore extends EventEmitter {
    constructor() {
        super();
        Dispatcher.register(this._registerToActions.bind(this));

    }

    getTextToRender() {
        return _blogData.content;
    }

    getImageList(){
        return _blogData.images;
    }

    _registerToActions(action) {
        switch (action.actionType) {
            case BlogActionTypes.REFRESH_CONTENT:
                this._setContent(action.payload);
                break;
            case BlogActionTypes.RESET_CONTENT:
                this._resetContent();
                break;
        }
    }

    _setContent(formData) {
        _blogData.content = formData.textToRender;
        _blogData.images = formData.images;
        this.emit(CHANGE_CONTENT_EVENT);
    }

    _resetContent() {
        //console.log("Reset Content");
        _blogData.content = '\u00A0';
        _blogData.images={};
        this.emit(CHANGE_CONTENT_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_CONTENT_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_CONTENT_EVENT, callback);
    }
}

export default new BlogContentStore();