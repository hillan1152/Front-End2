import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux;'

// const store = createStore(reducer, applyMiddleWare(thunk));
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );


