import React from 'react';
import { Link } from 'react-router-dom';
import NavModalPage from "./NavModalPage";
import styled from "styled-components";
import Logo from "../../img/Logo.svg";

const Header = styled.div`
 display: flex;
 justify-content: space-between;
 width: 100%;
 padding: 2%;
 border-bottom: 2px solid black;
//  margin-bottom: 1%;
 

`;


function NavBar() {
    return (
        <Header>
            <Link to="/trips">
                <img src={Logo} alt="Vacation Planner Logo" />
            </Link>
            <NavModalPage />
        </Header>
    )
}

export default NavBar
