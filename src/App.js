import React from 'react';
import { Route } from "react-router-dom";
import AddVacation from "./components/addVacation";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Messenger from "./components/Messenger";
import NavBar from "./components/NavBar";
import Suggestions from "./components/Suggestions";


import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/dates" component={Dates} />
      <Route path="/add-vacation" component={AddVacation} />
      <Route path="/comments" component={Comments} />
      <Route path="/contact" component={Contact} />
      <Route path="/footer" component={Footer} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/messenger" component={Messenger} />
      <Route path="/nav-bar" component={NavBar} />
      <Route path="/suggestions" component={Suggestions} />

      <AddVacation />
      <LandingPage />
      
    </div>
  );
}

export default App;
