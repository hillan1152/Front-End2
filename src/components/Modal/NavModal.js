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
                    <img className="logoImg" src={Logo} alt="Vacation Planner Logo"/>
                    <h3>Vacation Planner</h3>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default modal;