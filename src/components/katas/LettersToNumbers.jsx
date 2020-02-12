import React, { Component } from "react";
import { Link } from "react-router-dom";

class LettersToNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      arr: [],
      sentence: "",
      toggle: false
    };
  }

  alphabetPosition = text => {
    let { sentence, arr } = this.state;
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.alphabetPosition(this.state.text);
    }
  };

  toggler = () => {
    this.setState(prevState => {
      return {toggle: !prevState.toggle}
    });
  };

  render() {
    const { sentence, text, toggle } = this.state;
    return (
      <div>
        <p>
          Kata:
          https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
        </p>
        <h1> Alphabet Position </h1>
        <h3>
          {" "}
          Takes in a string and returns the number corresponding number in its
          order of the alphabet. ignores punctuation.{" "}
        </h3>
        {!toggle ? (
          <>
            <span> Entry: {text} </span>
          </>
        ) : (
          <>
            <span> Output: {sentence} </span>
          </>
        )}
        <br/>
        <input
          type="text"
          onChange={e => this.handleChange("text", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={(() => this.alphabetPosition(), this.toggler)}>
          Test
        </button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default LettersToNumbers;
