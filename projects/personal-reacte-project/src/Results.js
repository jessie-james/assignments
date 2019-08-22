import React from 'react'
import { withGlobal } from './GlobalProvider'

const Results = (props) => {
    const rates = props.rate;
    const reversRate = props.reversRate;
    const resultAmount = props.resultAmount;

    return (
        <div className="results">
            <div className="returned-results">
                <h1>{rates}  {props.option1}</h1>
                <h6>{reversRate}  {props.option2}</h6>
                <h3>ExchangeRate</h3>
            </div>
            <div className="returned-results">
                <h1>{resultAmount}</h1>
                <h3>Exchanged Amount</h3>
            </div>
            <button className="save" onClick={props.globalSave}>Save</button>
        </div>
    )
}
export default withGlobal(Results)
