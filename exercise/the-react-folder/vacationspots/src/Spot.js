import React from 'react'



function Spot(props) {
        let {  backgroundColor, border, place, price, timeToGo } = props
        const styles = {
            backgroundColor,
            border: `5px solid ${border}`, 
        
            color: "blue",
        }
        return (
            <div className="vaction-card" style={styles}>
                <h1>{place}</h1>
                <h3>{price}</h3>
                <h3>{timeToGo}</h3>
            </div>
        )
    }
export default Spot
