import React from 'react'

import styled from "styled-components";

const Output = styled.div`
    /* width: 12%; */
    background: lightgrey;
    border-radius: 8px;
    border: 2px solid black;
    margin: 2% 0;
    padding: 1%;

    &:hover {
        box-shadow: 0 0 5px 5px  #83a931;
    }
    
`;

const ContactCard = (props) => {
    return (
        <Output>
            <h4>{props.name}</h4>
        </Output>
    )
}

export default ContactCard
