import React from 'react'
import StrongCurrancy from './StrongCurrancy'
import WhyUse from './WhyUse.js'
import ExchangeBestPractices from './ExchangeBestPractices'

const About = () => {
    return (
        <div className="body about">
             <WhyUse />
            <StrongCurrancy />
            <ExchangeBestPractices/>
        </div>
    )
}
export default About