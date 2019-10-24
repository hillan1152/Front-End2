import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components";

const Feet = styled.div`
    background: lightgray;
    padding: 1%;
    text-align: left;
    display:flex;
    flex-direction: column;

    .links {
            margin: .5%;
            text-decoration: none;
            color: black;
        }
`;

function Footer() {
    return (
        <Feet>
             <Link to="/about-page" className="links
                    ">about</Link><br/>
            <Link to="/site-map-page"className="links
            ">site map</Link>
        </Feet>
    )
}

export default Footer
