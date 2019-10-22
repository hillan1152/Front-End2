import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Trips from "./components/Trips";
import TripPage from "./components/TripPage";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";


import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD

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

=======
      <Route path="/home-page" component={HomePage} />
      {/* <Route path="/dates" component={Dates} /> */}
      {/* <Route path="/add-vacation" component={AddVacation} /> */}
      {/* <Route path="/comments" component={Comments} /> */}
      {/* <Route path="/contacts" component={Contacts} /> */}
      {/* <Route path="/footer" component={Footer} /> */}
      {/* <Route path="/login" component={Login} /> */}
      {/* <Route path="/sign-up" component={SignUp} /> */}
      {/* <Route path="/messenger" component={Messenger} /> */}
      {/* <Route path="/nav-bar" component={NavBar} /> */}
      {/* <Route path="/suggestions" component={Suggestions} /> */}
      <Route exact path="/trips" component={Trips} />
      <Route exact path="/trip-page" component={TripPage} />
      {/* <Route path="/navigation" component={Navigation} /> */}
      <Route path="/sign-up-page" component={SignUpPage} />
      <Route path="/login-page" component={LoginPage} />


    
      {/* <HomePage /> */}
   
      <TripPage />
      
>>>>>>> 5835eb3df0eb6b1d14fed09d6563cf6b848547a2
    </div>
  );
}

export default App;
