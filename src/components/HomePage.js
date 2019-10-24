import React, { useState } from 'react';

import Modal from './Modal/Modal';
import Login from './Login';
import SignUp from './SignUp';

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

    .middle {
        display: flex;
        
        
        .leftSide {
            padding: 20% 5%;
            width: 50%;
            display:flex;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                font-size: 2rem;
            }
            h3 {
                font-size: 1rem;
            }

            button {
                margin: 5%;
                width: 40%;
                border-radius: 7px;
                background: #83a931;
                border: 1px solid black;

                &:hover {
                    
                    background: white;
                border: 1px solid #83a931;
                }//closes the hover
            
            }//closes btn 
            
            .cancel {
                background: red;
                width: 20%;
            }


        }//closes lft

        .rightSide {
            width: 50%;
            background: darkgray;
        }//closes right

    }closes middle

   

`;



function App() {
    const [isModalOpen, toggleModal] = useState(false);
    const [isModalOpen2, toggleModal2] = useState(false);
    

    // render () {
        return (
            <Container >
                <header className="top">
                    <img className="logoImg" src={Logo} alt="Vacation Planner Logo"/>
                </header>
                <div className="middle">
                    <div className="leftSide">
                        <h2>Vacation Planner</h2>
                        <h3>Vacation planning made super easy!</h3>
                        <div>
                        <button onClick={() => toggleModal(!isModalOpen)}>Sign Up</button>
                        <button onClick={() => toggleModal2(!isModalOpen2)}>Let's Go!</button>
      
                        <Modal isOpen={isModalOpen} toggle={toggleModal}>
                            
                            <SignUp />
                            <button className="cancel" onClick={() => toggleModal(false)}>cancel</button>
                        </Modal>

                        <Modal isOpen={isModalOpen2} toggle={toggleModal2}>
                            
                           <Login />
                           <button className="cancel" onClick={() => toggleModal(false)}>cancel</button>
                        </Modal>
                        
                        </div>
                    </div>
                    <div className="rightSide">
                    </div>
                </div>
                <footer className="footsie">
                    <h3>About</h3>
                    {/* <a href="">About</a> */}
                </footer>
            </Container>
        );
    }


export default App;




 






