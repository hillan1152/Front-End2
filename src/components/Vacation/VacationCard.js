import React from 'react'
import styled from "styled-components";

const Card = styled.div`
 display: flex;
margin: 6%;
 padding: 2%;

  `;



const VacationCard = (props) => {
    return (

        <Card>{props.place}</Card>

    )
}

export default VacationCard

