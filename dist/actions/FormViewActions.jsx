import Dispatcher from "../dispatchers/BlogDispatcher.jsx"
import FormActionTypes from "../constants/FormConstants.jsx"

class FormViewActions {
    appendImage(image) {
        Dispatcher.dispatch({
            actionType: FormActionTypes.APPEND_IMAGE,
            payload: image
        });
    }
}

export default new FormViewActions();