import React from 'react'
import { withGlobal } from './GlobalProvider'

const Results = (props) => {
    const rates = props.rate;
    const reversRate = props.reversRate;
    const resultAmount = props.resultAmount;

    return (
        <div className="results">
            <div className="returned-results">
                <h1>{rates} = {props.option2}</h1>
                <h5>{reversRate} = {props.option1}</h5>
                <h2>Exchange Rate</h2>
            </div>
            <div className="returned-results">
                <h2>{resultAmount}</h2>
                <h2>Exchanged Amount</h2>
            </div>
            <button className="save" onClick={props.globalSave}>Save</button>
        </div>
    )
}
export default withGlobal(Results)
