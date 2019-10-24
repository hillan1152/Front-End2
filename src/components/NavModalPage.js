import React, { useState } from "react";
// import ReactDOM from "react-dom";
import profIcon from "../img/profIcon.svg";
import Modal from "./Modal/Modal";
import styled from "styled-components";

// import "./styles.css";

const ProfIcon = styled.div`
border-radius: 50%;
margin: 0;
padding: 0;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 `;

function App() {
  const [isModalOpen, toggleModal] = useState(false);
  //   const [isModalOpen2, toggleModal2] = useState(false);
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}

      <ProfIcon
        onClick={() => toggleModal(!isModalOpen)}>
        <img src={profIcon} />
      </ProfIcon>

      {/* <button onClick={() => toggleModal2(!isModalOpen2)}>Let's Go!</button> */}

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <h1>test</h1>
        <p>Other text that describes what is happening</p>
        <button onClick={() => toggleModal(false)}>toggle</button>
      </Modal>
      {/* <Modal isOpen={isModalOpen2} toggle={toggleModal2}>
        <h1>Pickles</h1>
        <p>Other text that describes what is happening</p>
        <button onClick={() => toggleModal2(false)}>toggle</button>
      </Modal> */}

    </div>
  );
}

export default App