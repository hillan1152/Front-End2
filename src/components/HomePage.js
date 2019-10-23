
import React, { Component } from 'react';

import Modal from './Modal/Modal';
// import ModalTwo from './Modal/ModalTwo';

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
            <section>
                <div className="left">
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
                        </Modal>

                        <Modal
                            className="modal"
                            show={this.state.isShowingModal2}
                            close={this.closeModalHandler2}>
                                Login Form
                        </Modal>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;




 





