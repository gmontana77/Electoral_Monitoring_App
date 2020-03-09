// src/App.js

import React from "react";
import NavBar from "./components/NavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import DoASurvey from "./components/DoASurvey";
import SurveysDone from "./components/SurveysDone"; 
import logo from './images/logo-election.png';
import { Link, NavLink } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      {/* Don't forget to include the history module */}
    
      <Router history={history}>
            <div style={{ padding: '2em'}}> 
              <NavLink to="/profile" className="btn signIn-btn">
                  <img src={logo} style={{ width: '8.5em'}} alt="logo"/>
              </NavLink>
            </div>

        <header>  
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/surveyex" component={DoASurvey} />
          <PrivateRoute path="/surveysdone" component={SurveysDone} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;