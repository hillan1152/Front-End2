import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Trips from "./components/Trips";
import TripPage from "./components/TripPage";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";


import './App.css';

function App() {
  return (
    <div className="App">

      <Route exact path="/"
        render={(props) =>
          <HomePage {...props} />
        } />

      <Route exact path="/trips"
        render={(props) =>
          <Trips {...props} />
        } />

      <Route exact path="/trip-page"
        render={(props) =>
          <TripPage {...props} />
        } />

      <Route exact path="/sign-up-page"
        render={(props) =>
          <SignUpPage {...props} />
        } />

      <Route exact path="/login-page"
        render={(props) =>
          <LoginPage {...props} />
        } />

      <Route exact path="/profile-page"
        render={(props) =>
          <ProfilePage {...props} />
        } />

    </div>
  );
}

export default App;
