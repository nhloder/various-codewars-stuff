import React, { Component } from "react";
import { Link } from "react-router-dom";

class WordSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "",
      arr: [],
      fin: ''
    };
  }

  spinWords = (str) => {};

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.spinWords(this.state.str);
    }
  };

  render() {
    const { str } = this.state;
    return (
      <div>
        <p>Kata: </p>
        <h1> title </h1>
        <h3> Description </h3>
        <input
          type="text"
          onChange={e => this.handleChange("str", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.spinWords(str)}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default WordSpinner;