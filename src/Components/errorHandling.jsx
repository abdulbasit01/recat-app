import React from 'react'

function errorHandling({props}) {
    if (props==="joker"){
        throw new Error("Not a hero")
    }
    return (
        <div>
            {props}
        </div>
    )
}
export default errorHandling