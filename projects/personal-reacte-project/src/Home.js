import React from 'react'
import CountrySelect from './CountrySelect.js'
import { withGlobal } from './GlobalProvider'

const Home = () => {
    return(
        <div className="home">
            <form className="currancyform" >
                <input type="number" name='amount' value ='this.props.value' placeholder="Amount"></input>
                <CountrySelect />
                <CountrySelect />
                <button className ="submit">Submit</button>
            </form>
            <>
                <div>ExchangeRate</div>
                <div>Exchanged Amount</div>
                <button className="save">Save</button>
            </>
           
                
        </div>
    )
}
export default withGlobal(Home)