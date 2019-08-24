import React from 'react'
import CurrancyForm from './CurrancyForm'
import Results from './Results'
import StrongDollarScale from './StrongDollarScale'


const Home =()=>{
        return (
            <div className="home">
                <h3>This is a cool app to find out the strength and rate of a currency exchange</h3>
                <h4><StrongDollarScale /></h4>
                <CurrancyForm />
                <Results />
            </div>
        )
    }
export default Home