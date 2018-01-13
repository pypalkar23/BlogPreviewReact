import Dispatcher from "../dispatchers/BlogDispatcher.jsx"
import BlogActionTypes from "../constants/Blogconstants.jsx"

class BlogViewActions {

    updateHeading(heading) {
        Dispatcher.dispatch({
            actionType: BlogActionTypes.REFRESH_HEADING,
            payload: heading
        });
    }

    resetHeading() {
        Dispatcher.dispatch({
            actionType: BlogActionTypes.RESET_HEADING,
            payload: null
        });
    }


    updateAuthor(author) {
        Dispatcher.dispatch({
            actionType: BlogActionTypes.REFRESH_AUTHOR,
            payload: author
        });
    }

    resetAuthor() {
        Dispatcher.dispatch({
            actionType: BlogActionTypes.RESET_AUTHOR,
            payload: null
        });
    }

    updateContent(content) {
        Dispatcher.dispatch({
            actionType: BlogActionTypes.REFRESH_CONTENT,
            payload: content
        })
    }

    resetContent() {
        Dispatcher.dispatch({
            actionType: BlogActionTypes.RESET_CONTENT,
            payload: null
        });
    }
}

export default new BlogViewActions();