import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import QuoteMachine from "./QuoteMachine/QuoteMachine";
import SignUp from "./Auth/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <QuoteMachine />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
