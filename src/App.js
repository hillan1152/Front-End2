import React from 'react';
import { Route } from "react-router-dom";
import AddVacation from "./components/addVacation";
import Comments from "./components/Comments";
import Contacts from "./components/Contacts";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Messenger from "./components/Messenger";
import NavBar from "./components/NavBar";
import Suggestions from "./components/Suggestions";
import Trips from "./components/Trips";
import TripPage from "./components/TripPage";
import Navigation from "./components/Navigation";


import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/home-page" component={HomePage} />
      <Route path="/dates" component={Dates} />
      <Route path="/add-vacation" component={AddVacation} />
      <Route path="/comments" component={Comments} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/footer" component={Footer} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/messenger" component={Messenger} />
      <Route path="/nav-bar" component={NavBar} />
      <Route path="/suggestions" component={Suggestions} />
      <Route exact path="/trips" component={Trips} />
      <Route exact path="/trip-page" component={TripPage} />
      <Route path="/navigation" component={Navigation} />


      {/* <HomePage /> */}

      <TripPage />
      
    </div>
  );
}

export default App;
