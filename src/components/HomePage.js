import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import Modal from './Modal/Modal';
import Logo from "../img/Logo.png";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;

    .header {
        background: lightgray;
        display: flex;
        padding: 2%;
    }

    /* .cta {
        display: flex;


        .btnBox {
            display: flex;
            justify-content: space-evenly;

            button {
                font-size: 
            }
        }
    } */
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
            isShowing: true
        });
    }


    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }


    render() {
        return (
            <Container>
                <div className="header" >
                    <img src={Logo} alt="Vacation Planner Logo" />
                </div>
                <section>
                    <div className="left">
                        <h2>Vacation Planner</h2>
                        <h3>Vacation Planning made super Easy!</h3>
                    </div>
                    <div className="right">

                    </div>

                    {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}

                    <button className="open-modal-btn" onClick={this.openModalHandler}>SignUp</button>

                    <Modal
                        className="modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal>
                </section>
            </Container>
        );
    }

}

export default App;



