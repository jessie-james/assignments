import React from 'react'
import styled from "styled-components";

const Home = () => {
    return (
        <Wrapper>
        <div className="main-body">
            <h1>Professional Plumbing Repair</h1>
            <p>Plumbing repairs can come in a variety of ways. Whether it’s a leaking pipe or a broken refrigerator, Shamrock plumbing is equipped to handle it. Not only have we been Utah’s trusted plumbing contractor for over 30 years, but we offer competitive pricing for all of our services. We believe that quality plumbing can both increase the value of your home, as well as provide you with ease of mind.</p>
            <h1>WHAT OUR CLIENTS ARE SAYING</h1>
            <ul>
                <li>"Shamrock Plumbing is an outstanding company led by great people. Great service and very knowledgeable for new construction or existing plumbing. Highly recommend!"- MARCUS S.</li>
                <li>"Best plumbing company ever! 1/3 the cost of anyone else. No problems with their work and they never try to up-sell me on things. They have saved me probably $3,000 over the past year. I will never use anyone else..."- MATT B.</li>
                <li> "Using Shamrock was the best thing I could have done. I don’t normally post reviews but I thought they did such a great job that it was the least I could do! They had the best price on a water heater out of the 10 plumbers I called, and put in the same day! Thanks guys!"- ANONYMOUS</li>
            </ul>
        </div>
    </Wrapper>
    )
}




const Wrapper = styled.div`
    /* omitted */
`;
export default Home