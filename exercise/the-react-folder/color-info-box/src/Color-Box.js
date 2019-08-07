import React from 'react'
function ColorBox(props){
    let{backgroundColor, title, subtitle, information} =props
    const styles = {
        backgroundColor,
    }
    return (
        <div className="info-box" style ={styles}>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
            <p>{information}</p>
        </div>
    )
}
export default ColorBox