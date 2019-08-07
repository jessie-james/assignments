import React from 'react'
import Spot from './Spot.js'
import './Spots.json'

cosnt SpotsContainer = () => {
    const mappedSpots = Spots.map((box) => <Spot />) {
    return (
        <div className="spots-container">
                {mappedSpots}
        </div>
    )
}