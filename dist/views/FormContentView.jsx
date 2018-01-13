import React from 'react'
import BlogViewActions from "../actions/BlogViewActions.jsx";
import FormStore from "../stores/FormStore.jsx"

export default class FormContentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textToRender: '',
            images: {},
            imageSerialKey: 1,
        }

        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        let newContent = this.state.textToRender;

        let imageFromStore = FormStore.getImagetoAppend();

        let tempImageObject = imageFromStore.image;

        let listOfImages = this.state.images;
        let associatedkey = this.state.imageSerialKey;
        listOfImages[associatedkey] = tempImageObject;

        let imageText = imageFromStore.text;

        imageText=imageText.replace("?", associatedkey++);
        console.log(imageText);
        newContent=newContent.concat("\n" + imageText+ "\n");
        console.log(newContent);
        this.setState({
            textToRender: newContent,
            images: listOfImages,
            imageSerialKey:associatedkey
        });
        console.log(this.state.images[associatedkey-1]);
    }

    componentWillMount() {
        FormStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        FormStore.removeChangeListener(this._onChange);
    }

    componentDidUpdate() {
        BlogViewActions.updateContent(this.state);
    }

    _updateContent(event) {
        let value = event.target.value;
        this.setState({textToRender: value});

        if (value === '') {
            BlogViewActions.resetContent();
        }
        else {
            BlogViewActions.updateContent(this.state);
        }
    }


    render() {
        return <div className="form-group">
            <label htmlFor="blog-content">Content</label>
            <textarea className="form-control content-area" id="input-content" placeholder="Content"
                      value={this.state.textToRender}
                      onChange={this._updateContent.bind(this)}>
            </textarea>
        </div>;
    }
}

