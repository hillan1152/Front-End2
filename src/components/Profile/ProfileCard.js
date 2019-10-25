import React from 'react'

import styled from "styled-components";

const Output = styled.div`
    width: 14%;
    background: lightgrey;
    border-radius: 8px;
    border: 2px solid black;
    margin: 2%;
    padding: 1%;

    &:hover {
        box-shadow: 0 0 5px 5px  #83a931;
    }
    
    h2 {
        font-size: 1.5rem;
       
    }
`;

const VacationCard = (props) => {
    return (
        <Output>
            <h2>{props.name}</h2>
        </Output>
    )
}

export default VacationCard