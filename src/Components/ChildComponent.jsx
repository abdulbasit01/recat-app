import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.eventHandeler}>Button</button>
        </div>
    )
}

export default ChildComponent
