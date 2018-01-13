import React from 'react'
import BlogViewActions from '../actions/BlogViewActions.jsx'


export default class FormHeadingView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: '',
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

    _updateHeading(event) {
        let value = event.target.value;

        this.setState({heading: value});
        if (value === '')

            BlogViewActions.resetHeading();

        else
            BlogViewActions.updateHeading(value);
    }


    render() {
        return (<div className="form-group">
                <label htmlFor="blog-heading">Blog Heading</label>
                <input type="text"
                       className="form-control"
                       id="input-heading"
                       placeholder="Heading"
                       value={this.state.heading}
                       onChange={this._updateHeading.bind(this)}
                />
            </div>
        );
    }
}


