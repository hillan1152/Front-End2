import React from 'react'

import styled from "styled-components";

const Output = styled.div`
    width: 30vw;
    height: 6vh;
    background: lightgrey;
    border-radius: 8px;
    box-shadow: 5px 5px 5px #83a931;
    border: 2px solid black;
    margin: 5%;
    display:flex;
    justify-content:center;
    align-items:center;

    h2 {
        font-size: 2.5rem;
    }
`;

const VacationCard = (props) => {
    return (
        <Output>
            <h2>{props.name}</h2>
            
            {/* <h3>{props.location}</h3>
            <p>Bio: {props.bio}</p>
            <p>Ideal Experience: {props.idealExperience}</p> */}
        </Output>
    )
}

export default VacationCard