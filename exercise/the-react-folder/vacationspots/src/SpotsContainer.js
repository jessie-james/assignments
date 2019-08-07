import React from 'react'
import Spot from './Spot.js'
import specificSpots from'./Spots.json'

const SpotsContainer = () => {
    const mappedSpots = specificSpots.map((theSpot) => 
        <Spot backgroundColor={theSpot.backgroundColor}
            border= {theSpot.border}
            place={theSpot.place}
            price={theSpot.price}
            timeToGo={theSpot.timeToGo} />
            
    )
    return (
        <div className="spots-container">
                {mappedSpots}
        </div>
    )
}
export default SpotsContainer 