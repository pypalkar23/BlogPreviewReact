import React from 'react'

export default class FormImageUploadView extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }

        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({});
    }

    componentWillMount(){
        //CalculatorStore.addChangeListener(this._onChange);
    }

    componentWillUnmount(){
        //CalculatorStore.removeChangeListener(this._onChange);
    }

    render(){
         return(<div>
                 <label htmlFor="image-upload">Image to upload</label>&nbsp;
                 <div className="form-group row">
                    <span className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                    <input type="file" className="form-control"/>
                    </span>
                    <span className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                    <button type="button" className="btn btn-primary">Include</button>
                    </span>
                </div>
             </div>
         );
    }
}

