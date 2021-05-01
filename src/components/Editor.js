import React from 'react'

function Editor(props) {
    return (
        <div>
            <h1>Markdown Editor</h1>
            <textarea value={props.markdown} onChange={props.handleChange} name="editor" id="editor" cols="50" rows="30"></textarea>
        </div>
    )
}

export default Editor
