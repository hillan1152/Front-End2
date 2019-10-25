import React from 'react'
import { Link } from 'react-router-dom';

import Logo from "../../img/Logo.png";
import styled from "styled-components";

const Cabeza = styled.div`
    
        background: lightgray;
        padding: 3%;
        text-align:left;
        
            .logoImg {
                width: 5rem;

                &:hover {
                    box-shadow: 3px 3px 3px white;
                }

            }//closes logoImg
`;

function HeaderFront() {
    return (
        <Cabeza>
            <Link to="/">
                <img className="logoImg" src={Logo} alt="Vacation Planner Logo" />
            </Link>
        </Cabeza>
    )
}

export default HeaderFront
