import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import Header from '../Navigation/HeaderFront';
import Footer from './Footer';

import Logo from "../../img/Logo.png";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width:100%;


    .middle {
        display: flex;
        height: 83vh;
        
        
        .leftSide {
            padding: 20% 5%;
            width: 50%;
            display:flex;
            flex-direction: column;
            /* justify-content: space-between; */

            h2 {
                font-size: 2rem;
            }//closes
            h3 {
                font-size: 1rem;
            }//closes

            button {
                margin: 5%;
                width: 40%;
                border-radius: 7px;
                background: #83a931;
                border: 1px solid black;
                font-size: 1.4rem;
                padding: 2%;

                &:hover {
                    
                    background: white;
                border: 1px solid #83a931;
                }//closes the hover
            
            }//closes btn 
            
            .interior {
                .top {
                background: white;
                padding: 1.5%;
                border-radius:8px;
                }
                Link {
                text-decoration: none;
                    margin: 2%;
                    font-size:1.4rem;
                }
                
                input {
                    font-size:1.3rem;
                    text-align:center;
                    margin: 2% 0;
                    border-radius: 8px;
                }
                .cancel {
                    background: red;
                    font-size:.7rem;
                    
                }//closes cncl
            }//closes int

        }//closes lft

        .rightSide {
            width: 50%;
            background: darkgray;
        }//closes

    }//closes middle

`;



function App() {
    const [isModalOpen, toggleModal] = useState(false);
    const [isModalOpen2, toggleModal2] = useState(false);


    // render () {
    return (
        <Container >
            <Header />
            <div className="middle">
                <div className="leftSide">
                    <h2>Vacation Planner</h2>
                    <h3>Vacation planning made super easy!</h3>
                    <div>
                        <button onClick={() => toggleModal(!isModalOpen)}>Sign Up</button>
                        <button onClick={() => toggleModal2(!isModalOpen2)}>Let's Go!</button>

                        <Modal isOpen={isModalOpen} toggle={toggleModal}>
                        <div className="interior">
                            <div className="top">
                                <img src={Logo} />
                            </div>
                            <SignUp />
                            <button className="cancel" onClick={() => toggleModal(false)}>cancel</button>
                        </div>
                        </Modal>

                        <Modal isOpen={isModalOpen2} toggle={toggleModal2}>
                            <div className="interior">
                            <div className="top">
                                <img src={Logo} />
                            </div>
                            <Login /> 
                            <button className="cancel" onClick={() => toggleModal(false)}>cancel</button>
                             </div>
                        </Modal>

                    </div>
                </div>
                <div className="rightSide">
                </div>
            </div>
            <Footer />
        </Container>
    );
}


export default App;











