import React from 'react'
import CurrancyForm from './CurrancyForm'

import { withGlobal } from './GlobalProvider'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }

    }
   
    render() {
        const rates = this.props.rate;
        const resultAmount = this.props.resultAmount;

        return (
            <div className="home">
                <CurrancyForm />
                {/* <Results /> */}
                <div className="returned-results">
                        <h1>{rates}</h1>
                        <h3>ExchangeRate</h3>
                    </div>
                    <div className="returned-results">
                        <h1>{resultAmount}</h1>
                        <h3>Exchanged Amount</h3>
                    </div>
                    <button className="save" onClick={this.props.globalSave}>Save</button>
            </div>
        )
    }
}
export default withGlobal(Home)