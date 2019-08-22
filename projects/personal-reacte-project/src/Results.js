import React from 'react'
import StrongDollarScale from './StrongDollarScale'
import { withGlobal } from './GlobalProvider'

const Results = (props) => {
    const rates = props.rate;
    const reverseRate = props.reverseRate;
    const resultAmount = props.resultAmount;

    return (
        <div className="results">
            <div className="returned-results">
                <h5>{props.number} {props.option1} = </h5>
                <h1>{resultAmount} {props.option2}</h1>
                <h4>1 {props.option2} = {reverseRate} {props.option1} </h4>
                <h4>1 {props.option1} = {rates} {props.option2} </h4>
                <h2>Exchange Results</h2>
                
               
            </div>
            <button className="save" onClick={props.globalSave}>Save</button>
        </div>
    )
}
export default withGlobal(Results)

