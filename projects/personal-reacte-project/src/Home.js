import React from 'react'
import CurrancyForm from './CurrancyForm'
import Results from './Results'


const Home =()=>{
        return (
            <div className="home">
                <h3>This is a cool app  to find out the strenght and rate of a currancy exchange</h3>
                <CurrancyForm />
                <Results />
            </div>
        )
    }
export default Home