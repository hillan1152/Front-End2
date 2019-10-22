import React, { Component } from 'react';
// import { Link } from "react-router-dom";

import Modal from './Modal/Modal';
// import styled from "styled-components";

// const Container = styled.div`
//     height: 100vh;

//     .header {

//     }

//     .cta {
//         display: flex;


//         .btnBox {
//             display: flex;
//             justify-content: space-evenly;

//             button {
//                 font-size: 
//             }
//         }
//     }
// `;


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
    

    render () {
        return (
            <div>
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal>
                
            </div>
        );
    }
 
}

export default App;



