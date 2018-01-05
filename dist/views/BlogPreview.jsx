import React from 'react'
import BlogAuthorView from './BlogAuthorView.jsx'
import BlogHeadingView from './BlogHeadingView.jsx'
import BlogContentView from './BlogContentView.jsx'



export default class BlogPreview extends React.Component{
    render(){
        return(
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <div className="inside-box col-lg-11 col-md-11">
                    <div>
                        <BlogHeadingView/>
                        <BlogAuthorView/>
                        <BlogContentView/>
                    </div>
                </div>
            </div>

        );
    }
}
