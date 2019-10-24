import React, { Component } from 'react';

import Modal from './Modal/Modal';
import Login from './Login';
import SignUp from './SignUp';

import Logo from '../img/Logo.png';
import styled from 'styled-components';

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

            .open-modal-btn {
                margin: 5%;
                width: 40%;
                border-radius: 7px;
                background: #83a931;
                border: 1px solid black;

                &:hover {
                    
                    background: white;
                border: 1px solid #83a931;
                }//closes the hover
            }//closes the open-modal-btn
        }//closes left

        .rightSide {
            width: 50%;
            background: darkgray;
        }//closes right

    }closes middle

   

`;

class App extends Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowingModal1: true
        });
        console.log("Before openModalHandler :")
    }

    openModalHandler2 = () => {
      this.setState({
          isShowingModal2: true
      });
  }

    closeModalHandler = () => {
        this.setState({
          isShowingModal1: false,
        });
    }

    closeModalHandler2 = () => {
      this.setState({
        isShowingModal2: false
      });
  }

    render () {
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
                            { this.state.isShowingModal1 ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                            { this.state.isShowingModal2 ? <div onClick={this.closeModalHandler2} className="back-drop"></div> : null }

                            <button className="open-modal-btn" onClick={this.openModalHandler}>Sign Up</button>

                            <button className="open-modal-btn" onClick={this.openModalHandler2}>Let's Go!</button>

                            <Modal
                                className="modal"
                                show={this.state.isShowingModal1}
                                close={this.closeModalHandler}>
                                    Sign Up Form
                                    <SignUp />
                            </Modal>

                            <Modal
                                className="modal"
                                show={this.state.isShowingModal2}
                                close={this.closeModalHandler2}>
                                    Login Form
                                    <Login />
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
}

export default App;




 





