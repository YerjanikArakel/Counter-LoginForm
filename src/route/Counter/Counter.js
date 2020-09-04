import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./counter.css";

class Counter extends React.Component {
  handleIncrise() {
    let startValue = document.querySelector("#startPointInput");
    const stepValue = document.querySelector("#countStep").value;
    const minValue = document.querySelector("#minValue");
    const maxValue = document.querySelector("#maxValue");

    if (startValue.value) {
      startValue.value = Number(startValue.value) + Number(stepValue);
      console.log(startValue);
    }

    console.log(startValue);
  }
  render() {
    return (
      <div className="counter">
        <label className="counter-labels">
          First point of start please insert
          <input
            type="number"
            className="counter-input"
            placeholder="First point of start please insert"
            id="startPointInput"
          />
        </label>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleIncrise}
        >
          Start Increase
        </Button>
        <hr />
        <label className="counter-labels">
          Please choose step of adding
          <input type="number" className="counter-input" id="countStep" />
        </label>
        <Button variant="contained" color="primary">
          Start Decrease
        </Button>
        <hr />
        <label className="counter-labels">
          Please fill the Maximum value of operation
          <input type="number" className="counter-input" id="maxValue" />
        </label>
        <Button variant="contained" color="primary">
          Reset it to 0
        </Button>
        <hr />
        <label className="counter-labels">
          Please fill the Minimum value of operation
          <input type="number" className="counter-input" id="minValue" />
        </label>
        <hr />
        <Link to="/">
          <Button variant="contained" color="secondary">
            Home
          </Button>
        </Link>
      </div>
    );
  }
}

export default Counter;
