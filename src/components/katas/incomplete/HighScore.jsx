import React, { Component } from "react";
import { Link } from "react-router-dom";

class HighScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: ""
    };
  }

  high = (x) => {};

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.high(this.state.x);
    }
  };

  render() {
    const { x } = this.state;
    return (
      <div>
        <p>Kata: </p>
        <h1> title </h1>
        <h3> Description </h3>
        <input
          type="text"
          onChange={e => this.handleChange("x", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.high(x)}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default HighScore;