import React from 'react';
import Logo from "../../img/Logo.png";


import './Modal.css';



const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <div className="ModalTopText" >
                        <img src={Logo} alt="Vacation Planner Logo"/>
                        <h3>Sign Up for Vacation Planner</h3>
                      </div>  
                    
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>Cancel</button>
                    <button className="btn-continue">SignUp!</button>
                </div>
            </div>
        </div>
    )
}

export default modal;