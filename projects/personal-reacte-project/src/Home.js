import React from 'react'
import CountrySelect from './CountrySelect.js'

const Home = () => {
    return(
        <div className="home body">
            <form className="currancyform">
                <input type="number"></input>
                <CountrySelect />
                <CountrySelect />
            </form>
                
        </div>
    )
}
export default Home