import React, {useEffect} from 'react'
import marked from 'marked'

function Preview(props) {
    marked.setOptions({
        breaks: true
    });

    useEffect(() => {
        document.querySelector('#preview').innerHTML = marked(props.markdown);
        return () => {
            ''
        }
    }, [props.markdown])

    return (
        <div>
            <h1>Preview</h1>
            <div id="preview">
            </div>
        </div>
    )
}

export default Preview
