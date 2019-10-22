import React from 'react';
import Navigation from "./Navigation";
import styled from "styled-components";
import Logo from "../img/Logo.png";

const Header = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
 padding: 2%;
 border-bottom: 2px solid black;
 

`;


function NavBar() {
    return (
        <Header>
            <img src={Logo} alt="Vacation Planner Logo"/>
            <Navigation />
        </Header>
    )
}

export default NavBar
