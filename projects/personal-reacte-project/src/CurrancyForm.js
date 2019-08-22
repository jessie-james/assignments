import React from 'react'
import CountrySelect from './CountrySelect.js'
import { withGlobal } from './GlobalProvider'

const CurrancyForm = (props) => {

        return (
            <form className="currancyform" onSubmit={(e) => props.globalSubmit(e, props.option1, props.option2, props.number)}>
                <input type="number" name='amount' value={props.number} placeholder="Amount" onChange={props.amountChange}></input>
                <div className="mobile-form">
                <CountrySelect type='from' onChange={props.handleOptions1} />
                <i className="fa fa-exchange fa-3x"></i>
                <CountrySelect type='to' onChange={props.handleOptions2} />
                </div>
                <button className="submit">SUBMIT</button>
            </form>
        )
    }
export default withGlobal(CurrancyForm)
