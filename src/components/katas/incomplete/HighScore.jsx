import React, { Component } from "react";
import { Link } from "react-router-dom";

class HighScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: "",
      final: ""
    };
  }

  high = x => {
    let arr = x.split(" ");
    console.log("arr", arr);
    for (let i = 0; i < arr.length; i++) {
      let arr2 = [];
      console.log("arr2", arr2);
      if (arr[i].toUpperCase() === "A") {
        arr2.push(1);
      } else if (arr[i].toUpperCase() === "B") {
        arr2.push(2);
      } else if (arr[i].toUpperCase() === "C") {
        arr2.push(3);
      } else if (arr[i].toUpperCase() === "D") {
        arr2.push(4);
      } else if (arr[i].toUpperCase() === "E") {
        arr2.push(5);
      } else if (arr[i].toUpperCase() === "F") {
        arr2.push(6);
      } else if (arr[i].toUpperCase() === "G") {
        arr2.push(7);
      } else if (arr[i].toUpperCase() === "H") {
        arr2.push(8);
      } else if (arr[i].toUpperCase() === "I") {
        arr2.push(9);
      } else if (arr[i].toUpperCase() === "J") {
        arr2.push(10);
      } else if (arr[i].toUpperCase() === "K") {
        arr2.push(11);
      } else if (arr[i].toUpperCase() === "L") {
        arr2.push(12);
      } else if (arr[i].toUpperCase() === "M") {
        arr2.push(13);
      } else if (arr[i].toUpperCase() === "N") {
        arr2.push(14);
      } else if (arr[i].toUpperCase() === "O") {
        arr2.push(15);
      } else if (arr[i].toUpperCase() === "P") {
        arr2.push(16);
      } else if (arr[i].toUpperCase() === "Q") {
        arr2.push(17);
      } else if (arr[i].toUpperCase() === "R") {
        arr2.push(18);
      } else if (arr[i].toUpperCase() === "S") {
        arr2.push(19);
      } else if (arr[i].toUpperCase() === "T") {
        arr2.push(20);
      } else if (arr[i].toUpperCase() === "U") {
        arr2.push(21);
      } else if (arr[i].toUpperCase() === "V") {
        arr2.push(22);
      } else if (arr[i].toUpperCase() === "W") {
        arr2.push(23);
      } else if (arr[i].toUpperCase() === "X") {
        arr2.push(24);
      } else if (arr[i].toUpperCase() === "Y") {
        arr2.push(25);
      } else if (arr[i].toUpperCase() === "Z") {
        arr2.push(26);
      } else {
        arr2.push(`${arr[i]}`);
      }
    }
  };

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
        <p>
          Kata:
          https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript{" "}
        </p>
        <h1> Highest Scoring Word</h1>
        <h3>
          {" "}
          Given a string of words, finds the highest scoring word. Each letter
          of a word scores points according to its position in the alphabet: a =
          1, b = 2, c = 3 etc. numbers hold no value{" "}
        </h3>
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
