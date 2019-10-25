import React from 'react'
import styled from "styled-components";

const Card = styled.button`
    width: 40%;
    margin: 4%;
    padding: 2%;
    background: #83a931;
    font-size:1.6rem;
    border-radius: 7px;
    box-shadow: 2px 2px 2px;

    &:hover {
        color: #83a931;
        border: 2px solid #83a931;
        background:white;
    }

  `;



const VacationCard = (props) => {
    return (

        <Card>{props.place}</Card>

    )
}

export default VacationCard

