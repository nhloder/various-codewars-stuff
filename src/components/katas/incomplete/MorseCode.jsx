import React, { Component } from "react";
import { Link } from "react-router-dom";

class MorseDecoder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      morse: ""
    };
  }

  decodeMorse = (morse) => {
    //code
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.decodeMorse(this.state.morse);
    }
  };

  render() {
    const { morse } = this.state;
    return (
      <div>
        <p>Kata: https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript </p>
        <h1> Decode the Morse Code </h1>
        <h3> Takes in Morse code (as ASCII inputs " . - ") and translates it into regular english. </h3>
        <input
          type="text"
          onChange={e => this.handleChange("morse", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.decodeMorse(morse)}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}
export default MorseDecoder;