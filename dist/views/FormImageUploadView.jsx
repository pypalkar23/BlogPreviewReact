import React from 'react'
import FormViewActions from '../actions/FormViewActions.jsx'

export default class FormImageUploadView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageText: '',
            image: ''
        }

        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({});
    }

    componentWillMount() {
        //CalculatorStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        //CalculatorStore.removeChangeListener(this._onChange);
    }

    _validateAndGetJson(file) {
        if (file.type.indexOf("image") !== -1)
            return "img{\"name\":\"" + file.name + "\", \"key\":?}";
        return '';
    }

    _updateImageValue(event) {
        event.preventDefault();
        let imageObject = event.target.files[0];
        if (imageObject === undefined)
            return;

        let imageText = this._validateAndGetJson(imageObject);
        let reader = new FileReader();
        reader.onload = (e) => {
            console.log("in On Load");
            this.setState({image:reader.result, text: imageText});
        }
        reader.readAsDataURL(imageObject);
        console.log(this.state.image);
    }


    _appendImage() {

        let imagePacket = this.state;
        console.log(imagePacket.image);
        console.log(imagePacket.imageText);

        //console.log("Added");
        FormViewActions.appendImage(imagePacket);

    }


    render() {
        return (<div>
                <label htmlFor="image-upload">Image to upload</label>&nbsp;
                <div className="form-group row">
                    <span className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <input type="file" className="form-control" onChange={(e) => this._updateImageValue(e)}/>
                    </span>
                    <span className="col-lg-2 col-md-2 col-sm-12 col-xs-12"></span>
                    <button type="button" className="btn btn-primary" onClick={(e) => this._appendImage(e)}>Include
                    </button>
                </div>
            </div>
        );
    }
}

