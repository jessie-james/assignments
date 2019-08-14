import React from 'react'

const Character = (props) => {
    
    return (
        <div className="character">
            <h1>{props.name}</h1>
            <p>{props.height}</p>
        </div>
    )
}
export default Character

