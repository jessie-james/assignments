import React from 'react'

const Square = (props) => {
    let {backgroundColor}= props
    const squareStyles = {
        backgroundColor: backgroundColor,
        border: `5px solid black`,
        height: '100%',
        width: '100%',

    }

    return (
        <div className = "square" style ={squareStyles}></div>
            
    )
}
export default Square
