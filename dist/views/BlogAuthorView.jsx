import React from 'react'
import BlogAuthorStore from '../stores/BlogAuthorStore.jsx'

export default class BlogAuthorView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_name: '',
        }

        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({author_name: BlogAuthorStore.getAuthor()});
    }

    componentWillMount(){
        BlogAuthorStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        BlogAuthorStore.removeChangeListener(this._onChange());
    }

    render() {
        return (<div id="author" className="">
                {this.state.author_name}
            </div>
        );
    }
}

