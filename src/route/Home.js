import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function handleCounter() {
  return <Link to="/counter"> </Link>;
}

function handleLoginForm() {
  return <Link to="/login-form"></Link>;
}

function Home() {
  return (
    <Router>
      <div className="App">
        <Link to="/counter">
          <Button variant="contained" onClick={handleCounter()}>
            Homework of Counter
          </Button>
        </Link>
        <Link to="/login-form">
          <Button variant="contained" onClick={handleLoginForm()}>
            Login Form
          </Button>
        </Link>
      </div>
    </Router>
  );
}

export default Home;
