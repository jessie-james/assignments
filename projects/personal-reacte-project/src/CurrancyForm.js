import React from 'react'
import CountrySelect from './CountrySelect.js'
import { withGlobal } from './GlobalProvider'

const CurrancyForm = (props) => {

        return (
            <form className="currancyform" onSubmit={(e) => props.globalSubmit(e, props.option1, props.option2, props.number)}>
                <input type="number" name='amount' value={props.number} placeholder="Amount" onChange={props.amountChange}></input>
                <CountrySelect type='from' onChange={props.handleOptions1} />
                <CountrySelect type='to' onChange={props.handleOptions2} />
                <button className="submit" >Convert</button>
            </form>
        )
    }
export default withGlobal(CurrancyForm)
