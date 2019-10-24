import React from 'react';

import Footer from './Footer';
import Header from './HeaderFront';


import Damon from '../img/damon.jpeg';
import Manuel from '../img/manuel.jpeg';
import Nabia from '../img/nabia.jpeg';
import April from '../img/april.jpeg';
import Jeremy from '../img/jeremy.jpg';
import Anthony from '../img/Anthony.png';
import Kenneth from '../img/kenneth.jpg';
import Diana from '../img/diana.jpeg';
import Christina from '../img/Christina.png';




import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width:100%;
    box-sizing: border-box;
    max-width: 100%;

    .middle {
    padding: 1%;
    border: 1px solid #83a931;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .card {
                width:20%;
                margin: 1%;
                padding: 1% 0;
                border-radius: 15px;
                background: black;
                border: 2px solid #83a931;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;

                @media (max-width: 1000px) {
                    width: 25%;
                }

                @media (max-width: 800px) {
                    width: 40%;

                }

                @media (max-width: 800px) {
                    width: 40%;
                }


                h3 {
                    width: 60%;
                    color: #83a931;
                    text-align: center;
                    font-size:1.4rem
                }//closes the h3

                img {
                    width: 70%;
                    border-radius: 35%;
                    border: 2px solid #83a931;
                    margin:5% 0;
                }//closes the img

                h5 {
                    width: 60%;
                    color: #83a931;
                    text-align: center;
                }//closes the h5

                .fab {
                    font-size: 4rem;
                    margin:4%;
                    color: #83a931;
                }//closes the icon

            }//closes the card
    }
`;

function About() {
    return (
        <Container >
            <Header />
                <div className="middle">
                    <div className="card">
                        <h3>Damon Bogich</h3>
                        <img src={Damon} alt="Damon" />
                        <h5>UI</h5>
                        <a href="https://github.com/damonbogich"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="card">
                        <h3>Manuel Velasco</h3>
                        <img src={Manuel} alt="Manuel" />
                        <h5>UI</h5>
                        <a href="https://github.com/menosvelasco"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="card">
                        <h3>April M. Clements</h3>
                        <img src={April} alt="April" />
                        <h5>React I</h5>
                        <a href="https://github.com/AMC-ai"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="card">
                        <h3>Jeremy McWilliams</h3>
                        <img src={Jeremy} alt="Jeremy" />
                        <h5>React I</h5>
                        <a href="https://github.com/J2Macwilliams"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="card">
                        <h3>Anthony Hill</h3>
                        <img src={Anthony} alt="Anthony" />
                        <h5>React II</h5>
                        <a href="https://github.com/hillan1152"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="card">
                        <h3>Kenneth Austin</h3>
                        <img src={Kenneth} alt="Kenneth" />
                        <h5>React II</h5>
                        <a href="https://github.com/Kennethaustin"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="card">
                        <h3>Diana Grams</h3>
                        <img src={Diana} alt="Diana" />
                        <h5>Java Back End</h5>
                        <a href="https://github.com/deegrams221"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="card">
                        <h3>Nabia M.</h3>
                        <img src={Nabia} alt="Nabia" />
                        <h5>UX Designer</h5>
                    </div>
                    <div className="card">
                        <h3>Christina Deligatta</h3>
                        <img src={Christina} alt="Christina" />
                        <h5>Project Manager</h5>
                        <a href="https://github.com/TinaDelli"><i class="fab fa-github"></i></a>
                    </div>
                    
                </div>
            <Footer />
        </Container>
    )
}

export default About

