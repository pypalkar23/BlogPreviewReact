import React from 'react'
import BlogAuthorStore from '../stores/BlogAuthorStore.jsx'

export default class BlogAuthorView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author_name: BlogAuthorStore.getAuthor()
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
        const classBlank=(this.state.author_name==='\u00A0')?"blank":"";
        const content= (this.state.author_name=='\u00A0')?"Author...":this.state.author_name;
        return (<div id="author" className={classBlank}>
                {content}
            </div>
        );
    }
}

