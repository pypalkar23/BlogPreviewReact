import React from 'react'
import FormHeadingView from './FormHeadingView.jsx';
import FormContentView from './FormContentView.jsx';
import FormAuthorView from './FormAuthorView.jsx';
import FormImageUploadView from './FormImageUploadView.jsx';


export default class FormView extends React.Component{
    render(){
        return(
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div className="inside-box col-lg-11 col-md-11">
                    <div>
                        <FormHeadingView/>
                        <FormAuthorView/>
                        <FormContentView/>
                        <FormImageUploadView/>
                    </div>
                </div>
            </div>

        );
    }
}

