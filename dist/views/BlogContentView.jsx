import React from 'react'
import BlogContentStore from '../stores/BlogContentStore.jsx'
import ImageContainerView from '../views/ImageContainerView.jsx'


export default class BlogContentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textToRender: '',
            images: {},
        }

        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({textToRender: BlogContentStore.getTextToRender(), images: BlogContentStore.getImageList()});
    }


    componentWillMount() {
        BlogContentStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        BlogContentStore.removeChangeListener(this._onChange);
    }

    renderImage(imageKey, url) {
        return (<ImageContainerView imageNo={imageKey} imageUrl={url}/>);
    }

    createImageContainer(line) {
        let lineObject='';
        try {
             lineObject = JSON.parse(line.substring(3));
        }
        catch(err)
        {
            console.log(err);
            return "";
        }
        let retrievalkey = lineObject["key"];
        if(retrievalkey === undefined && !isNumber(retrievalkey))
            return "";
        let imageUrl = this.state.images[retrievalkey];
        if(imageUrl === undefined)
            return "";
        return this.renderImage(retrievalkey, imageUrl);
    }


    render() {
        //return(<div id="post-content" className="" dangerouslySetInnerHTML={this.getRenderedContent(this.state.content)}>
        //       </div>
        //console.log(this.state.images);
        let lines = this.state.textToRender;
        if ((typeof lines) === 'string') {
            let lineArr = lines.split("\n");
            const finalContent = lineArr.map((line, lineNo) => {
                const keyForLine=lineNo+100;
                const content = (line.startsWith("img{") && line.endsWith("}")) ? (
                    <div key={keyForLine}>{this.createImageContainer(line)}</div>) : (
                    <div key={keyForLine}>{line}</div>);
                return content;
            });
            return (<div id="post-content" className="captureEnterAndSpace">
                    {finalContent}
                </div>
            );
        }
    }
}

