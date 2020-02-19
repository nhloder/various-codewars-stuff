import React, { Component } from "react";
import { Link } from "react-router-dom";

class squareDigits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      result: 0
    };
  }

  squareDigits = num => {
    let number = num.toString()
    let arr = []
    for (let i = 0; i < number.length; i++) {
      arr.push(Math.pow(number[i], 2));
    }
    let res = parseInt(arr.join(''))
console.log(res);

    this.setState({
      result: res
    })
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

  render() {
    const { num, result } = this.state;
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
        {!result ? (
          <>
            <span> Entry: {num}</span>
            <br />
          </>
        ) : (
          <>
            <span> output: {result}</span>
            <br />
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
