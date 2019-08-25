import React from 'react'
import styled from "styled-components";

const Services = () => {
    return (
        <Wrapper>
        <div className="main-body">
            <ul className="services">
                <li className="service">Leaking pipe repair</li>
                <li className="service">Water heater repair</li>
                <li className="service">Garbage disposal repair</li>
                <li className="service">Garbage disposal repair</li>
            </ul>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* omitted */
`;

export default Services