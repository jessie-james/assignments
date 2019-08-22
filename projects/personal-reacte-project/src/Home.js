import React from 'react'
import CurrancyForm from './CurrancyForm'
import Results from './Results'
import StrongDollarScale from './StrongDollarScale'
import {Link} from 'react-router-dom'


const Home =()=>{
        return (
            <div className="home">
                <h3>This is a cool app to find out the strength and rate of a currency exchange</h3>
                <Link to='/about'>How Dis Work</Link>
                <StrongDollarScale />
                <CurrancyForm />
                <Results />
            </div>
        )
    }
export default Home