import React, { Component } from "react";
import { Link } from "react-router-dom";

class Narcissism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0
    };
  }

  narcissistic = (val) => {
    let value = val.toString()
    let power = (val.toString().length + 1);
    let arr = []
    for (let i = 0; i < value.length;i++){
      arr.push(value[i])
    }
    //thats not it this needs to be scraped and finish
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.narcissistic(this.state.val);
    }
  };

  render() {
    const { val } = this.state;
    return (
      <div>
        <p>Kata: https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript</p>
        <h1> Does my number look big in this? </h1>
        <h3> Checks to see wether or not a number is "Narcissistic", or  is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base </h3>
        <input
          type="text"
          onChange={e => this.handleChange("str", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.narcissistic(val)}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default Narcissism;