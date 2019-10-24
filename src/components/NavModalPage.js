import React, { useState } from "react";
// import ReactDOM from "react-dom";

import Modal from "./Modal/Modal";

// import "./styles.css";

function App() {
  const [isModalOpen, toggleModal] = useState(false);
//   const [isModalOpen2, toggleModal2] = useState(false);
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <button onClick={() => toggleModal(!isModalOpen)}>Sign Up</button>
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