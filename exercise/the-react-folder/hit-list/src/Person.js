import React from 'react'
const Person = (props) => {
    const styles = {
        border: 'black solid 5px',
        borderRadius: '5%',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
    }
    const imgStyle = {
        borderRadius:'50%',
    }

    return (
        <div style= {styles}>
            <h1>hi</h1>
            <h1>{props.name}</h1> 
            <img src={props.image} style={imgStyle}/>
        </div>
        
        
    )
}
export default Person