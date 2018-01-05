import React from 'react'
import BlogContentStore from '../stores/BlogContentStore.jsx'


export default class BlogContentView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:"",
        }

        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({content:BlogContentStore.getContent()});
    }

    componentWillMount(){
        BlogContentStore.addChangeListener(this._onChange);
    }

    componentWillUnmount(){
        BlogContentStore.removeChangeListener(this._onChange);
    }

    getRenderedContent(content){
        return {__html:content.toString()};
    }
    render(){
         //return(<div id="post-content" className="" dangerouslySetInnerHTML={this.getRenderedContent(this.state.content)}>
         //       </div>
         return(<div id="post-content" className="captureEnterAndSpace">
                    {this.state.content}
                </div>
         );
    }
}

