import React from 'react';
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Apidata from './components/Apidata';
import SignIn from './components/SignIn';
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Apidata" component={Apidata} />

        </Switch>
      </Router>

    </div >
  );
}

export default App;
