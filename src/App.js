import React from "react";
import "./App.css";
// import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./route/Counter/Counter";
import Home from "./route/Home";
import LoginForm from "./route/LoginForm";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/login-form">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
