import React from 'react';

import Footer from './Footer';
import Header from './HeaderFront';


import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width:100%;

    .middle {
    height: 84vh;
    padding: 5%;
    border: 1px solid #83a931;

    }
`;

function About() {
    return (
        <Container >
            <Header />
                <div className="middle">
                    <div class="card">
                        <h3>Jeremy McWilliams</h3>
                        <img src="./handles/Jeremy.jpg" alt="Jeremy"/>
                        <h5>Web UI</h5>
                        <a href="https://github.com/J2Macwilliams"><img/></a>
                    </div>
                </div>
            <Footer />
        </Container>
    )
}

export default About
