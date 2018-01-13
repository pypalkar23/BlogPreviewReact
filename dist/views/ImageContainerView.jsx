import React from 'react'

function ImageContainerView(props) {
    return <div className="image-container">
        <img className="col-lg-5 col-md-5 img-thumbnail" key={props.imageNo} src={props.imageUrl}/>
    </div>;
}

export default ImageContainerView;