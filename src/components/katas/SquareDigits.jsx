import React, { Component } from "react";
import { Link } from "react-router-dom";

class squareDigits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      arr: [],
      toggle: false
    };
  }

  squareDigits = num => {
    //may the code be with you
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.squareDigits(this.state.num);
    }
  };
  
  toggler = () => {
    this.setState(prevState => {
      return { toggle: !prevState.toggle };
    });
  };

  render() {
    const { num, arr, toggle } = this.state;
    return (
      <div>
        <p>
          Kata:
          https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
        </p>
        <h1> Square Every Digit </h1>
        <h3>
          {" "}
          Takes every digit and returns a number where every digit of the first
          number has been replaced by it's Square{" "}
        </h3>
        {!toggle ? (
          <>
            <span> Entry: {num}</span>
          </>
        ) : (
          <>
            <span> Entry: {arr}</span>
          </>
        )}
        <input
          type="number"
          onChange={e => this.handleChange("num", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.squareDigits(num)}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default squareDigits;
