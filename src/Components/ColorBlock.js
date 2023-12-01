import React from 'react'

function ColorBlock (props) {
    return(
        <div className="colorBlock"
            style={{'backgroundColor': props.color, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock