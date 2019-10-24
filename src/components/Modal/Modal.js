import React from 'react';
import pose from "react-pose";
import Logo from "../../img/Logo.png";
import './Modal.css';

import styled from 'styled-components';



const modal = (props) => {
    return (
        <div className="modal-wrapper"
            style={{
                transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <div className="modal-header">
                <img className="logoImg" src={Logo} alt="Vacation Planner Logo" />
                <h3>Vacation Planner</h3>
            </div>
            <div className="modal-body">
                {props.children}
            </div>
            <div className="modal-footer">
                <button className="btn-cancel" onClick={props.close}>Cancel</button>

            </div>
        </div>
    )
}

export default modal;