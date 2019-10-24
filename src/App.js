import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Trips from "./components/Trips";
import TripPage from "./components/TripPage";
import ProfilePage from "./components/ProfilePage";
import AboutPage from "./components/AboutPage";
import SiteMapPage from "./components/SiteMapPage";


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

      <Route exact path="/profile-page"
        render={(props) =>
          <ProfilePage {...props} />
        } />

      <Route exact path="/about-page"
        render={(props) =>
          <AboutPage {...props} />
        } />

      <Route exact path="/site-map-page"
        render={(props) =>
          <SiteMapPage {...props} />
        } />


    </div>
  );
}

export default App;
