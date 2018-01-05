import React from 'react'
import BlogViewActions from '../actions/BlogViewActions.jsx'
export default class FormAuthorView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            authorName:''
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

    _updateAuthor(event){
        let value=event.target.value;
        this.setState({authorName:value});
        if(value==='')
        {
            BlogViewActions.resetAuthor();
        }
        else{
            BlogViewActions.updateAuthor(value);
        }
    }

    render(){
         return( <div className="form-group">
                    <label htmlFor="blog-author">Author</label>
                    <input type="text" className="form-control" id="input-author" placeholder="Author" value={this.state.authorName} onChange={this._updateAuthor.bind(this)}/>
                </div>
         );
    }
}

