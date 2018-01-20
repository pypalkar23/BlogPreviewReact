import React from 'react'
import BlogContentStore from '../stores/BlogContentStore.jsx'
import ImageContainerView from '../views/ImageContainerView.jsx'


export default class BlogContentView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textToRender: BlogContentStore.getTextToRender(),
            images: BlogContentStore.getImageList()
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
        let lineObject = '';
        try {
            lineObject = JSON.parse(line.substring(3));
        }
        catch (err) {
            console.log(err);
            return "";
        }
        let retrievalkey = lineObject["key"];
        if (retrievalkey === undefined && !isNumber(retrievalkey))
            return "";
        let imageUrl = this.state.images[retrievalkey];
        if (imageUrl === undefined)
            return "";
        return this.renderImage(retrievalkey, imageUrl);
    }


    render() {
        let rawText = '';
        let contentCSS = '';
        console.log(this.state.textToRender);
        if (this.state.textToRender === '\u00A0' || this.state.textToRender === '') {
            rawText = "Content....";
            contentCSS = "captureEnterAndSpace blank alignCenter";
        }
        else {
            let lines = this.state.textToRender;
            contentCSS="captureEnterAndSpace";
            if ((typeof lines) === 'string') {
                let lineArr = lines.split("\n");
                rawText = lineArr.map((line, lineNo) => {
                    const keyForLine = lineNo + 100;
                    const content = (line.startsWith("img{") && line.endsWith("}")) ? (
                        <div key={keyForLine}>{this.createImageContainer(line)}</div>) : (
                        <div key={keyForLine}>{line}</div>);

                    return content;
                });
            }
        }
        const finalContent=rawText;
        return (<div id="post-content" className={contentCSS}>
                {finalContent}
            </div>
        );
    }


}

