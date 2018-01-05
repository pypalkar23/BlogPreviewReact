import React from 'react'
import BlogPreview from "./BlogPreview.jsx"
import FormView from "./FormView.jsx"

export default class App extends React.Component{
    render(){
        return(
            <div className="row">
                <FormView/>
                <BlogPreview/>
            </div>
        );
    }
}


