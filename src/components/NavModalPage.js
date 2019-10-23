import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import NavModal from './Modal/NavModal';
// import Logo from "../img/Logo.png";


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
    }



    closeModalHandler = () => {
        this.setState({
          isShowingModal1: false
        });
    }

  

    render () {
        return (
          <div>

            <div>
                { this.state.isShowingModal1 ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                

                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                

                <NavModal
                    className="modal"
                    show={this.state.isShowingModal1}
                    close={this.closeModalHandler}>
                        
                        {/* <Link to="/profile-page">Profile</Link> */}
                        
                            <Link to="/trips">Trips</Link>
                        
                        
                </NavModal>

               
            </div>
          </div>
        );
    }
}

export default App;

