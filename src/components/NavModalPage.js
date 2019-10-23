import React from 'react';
import { Link } from "react-router-dom";

import NavModal from './Modal/NavModal';
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

class NavModalPage extends Component() {
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


    closeModalHandler = () => {
        this.setState({
          isShowingModal1: false,
        });
    }

    
  render () {
    return (
           
                    <div>
                        { this.state.isShowingModal1 ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                        <button className="open-modal-btn" onClick={this.openModalHandler}>Sign Up</button>

                        <Modal
                            className="modal"
                            show={this.state.isShowingModal1}
                            close={this.closeModalHandler}>
                                <Link to="/profile-page">Profile Page</Link>
                                <Link to="/trips">Trips</Link>
                        </Modal>

                    </div>
    );
}
}

export default NavModalPage


<Link to="/profile-page">Profile Page</Link>
<Link to="/trips">Trips</Link>