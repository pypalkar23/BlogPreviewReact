import React from 'react'
import BlogHeadingStore from '../stores/BlogHeadingStore.jsx'

export default class BlogHeadingView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: BlogHeadingStore.getHeading(),
        }

        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({heading: BlogHeadingStore.getHeading()});
    }

    componentWillMount() {
        BlogHeadingStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        BlogHeadingStore.removeChangeListener(this._onChange);
    }

    render() {
        return (<div id="heading" className="">
                {this.state.heading}
            </div>
        );
    }
}

