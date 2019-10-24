import React from 'react';

import Footer from './Footer';
import Header from '../Navigation/HeaderFront';

import SMapImg from '../../img/siteMap.png';
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width:100%;

   .middle {
    height: 84vh;
    padding: 5%;
    background: darkgray;
    border: 3px solid #83a931;

        h2 {
            font-size: 4rem;
            margin: 3%;
        }
        img {
            border: 2px solid black;
            position: relative;
            box-shadow: 0 0  10px 5px ;
            border-radius: 8px;
        }
   }
`;

function SiteMap() {
    return (
        <Container >
            <Header />

            <div className="middle" >
                <h2>Site Map</h2>
                <img src={SMapImg} alt="" />
            </div>
            <Footer />
        </Container>
    )
}

export default SiteMap
