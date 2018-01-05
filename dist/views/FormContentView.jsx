import React from 'react'
import BlogViewActions from "../actions/BlogViewActions.jsx";

export default class FormContentView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:'\u00A0'
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

    _updateContent(event){
        let value=event.target.value;
        this.setState({content:value});
        if(value==='')
        {
            BlogViewActions.resetContent();
        }
        else{
            BlogViewActions.updateContent(value);
        }
    }


    render(){
        return <div className="form-group">
            <label htmlFor="blog-content">Content</label>
            <textarea className="form-control content-area" id="input-content" placeholder="Content"
                      value={this.state.content}
                      onChange={this._updateContent.bind(this)}></textarea>
        </div>;
    }
}

