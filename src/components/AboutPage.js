import React from 'react';

import Logo from "../img/Logo.png";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width:100%;

    .top {
        background: lightgray;
        padding: 3%;
        text-align:left;
        
            .logoImg {
                width: 5rem;
            }//closes logoImg
    }
`;

function About() {
    return (
        <Container >
                <header className="top">
                    <img className="logoImg" src={Logo} alt="Vacation Planner Logo"/>
                </header>
                </Container>
    )
}

export default About
