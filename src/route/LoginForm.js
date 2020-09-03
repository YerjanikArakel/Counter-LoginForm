import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <h1>LoginForm</h1>
        <Link to="/">
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </Link>
      </div>
    );
  }
}

export default LoginForm;
