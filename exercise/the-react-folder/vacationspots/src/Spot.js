import React from 'react'
import Spots from './spots.json'

const mappedSpots = Spots.map((box) => <Spot />) {
function Spot(props){
        let { backgroundColor, title, subtitle, information } = props
        const styles = {
            backgroundColor,
        }
        return (
            <div className="info-box" style={styles}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{information}</p>
            </div>
        )
    }
    return (
        <div>
            {mappedSpots}
        </div>
    )
}
export default Spot
