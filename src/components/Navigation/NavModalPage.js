import React, { useState } from "react";

import profIcon from "../../img/profIcon.svg";
import Modal from "../Modal/Modal";
import ProfilePage from '../Profile/ProfilePage';
import styled from "styled-components";
import Logo from '../../img/Logo.png';

const Interior = styled.div`
   
   height: 20vh;

    .top {
      height: 7vh;
      background: white;
      padding: 1.5%;
      width: 100vw;
      border-radius:8px;

      h3 {
      font-size: 1rem;
      }

    }
  button {
    width: 20%;
    margin: 2%;
    padding: .5%;
    background: darkgrey;
    font-size:1rem;
    border-radius: 7px;
    box-shadow: 0 0 2px 2px;

    &:hover {
        color: #83a931;
        border: 2px solid #83a931;
        background:white;
    }


  }
`;



const ProfIcon = styled.div`
border-radius: 50%;
margin: 0;
padding: 0;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 `;

function App() {
  const [isModalOpen, toggleModal] = useState(false);
  
  return (
    <div className="App">
     

      <ProfIcon
        onClick={() => toggleModal(!isModalOpen)}>
        <img src={profIcon} />
      </ProfIcon>

     
       
          <Modal isOpen={isModalOpen} toggle={toggleModal}>
             <Interior>
               <div className="top">
                  <img src={Logo} />
                    <h3>Vacation Planner Profile</h3>
                </div>
                <button onClick={() => toggleModal(false)}>cancel</button>
             </Interior>
          </Modal>
       

    </div>
  );
}

export default App