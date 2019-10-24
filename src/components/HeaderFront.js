import React from 'react'

import Logo from "../img/Logo.png";
import styled from "styled-components";

const Cabeza = styled.div`
    
        background: lightgray;
        padding: 3%;
        text-align:left;
        
            .logoImg {
                width: 5rem;
            }//closes logoImg
`;

function HeaderFront() {
    return (
        <Cabeza>
            <img className="logoImg" src={Logo} alt="Vacation Planner Logo"/>
        </Cabeza>
    )
}

export default HeaderFront
