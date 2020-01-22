import React, { Component } from "react";
import { Link } from "react-router-dom";

class Grades extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grade: "",
      num1: 0,
      num2: 0,
      num3: 0
    };
  }

  getGrade = (num1, num2, num3) => {
    let res = (+num1 + +num2 + +num3) / 3;
    if (
      num1 > 100 ||
      num1 < 0 ||
      num2 > 100 ||
      num2 < 0 ||
      num3 > 100 ||
      num3 < 0
    ) {
      this.setState({
        grade: "Please enter a number between 1 and 100"
      });
    } else if (res >= 0 && res < 60) {
      this.setState({
        grade: "F"
      });
    } else if (res >= 60 && res < 70) {
      this.setState({
        grade: "D"
      });
    } else if (res >= 70 && res < 80) {
      this.setState({
        grade: "C"
      });
    } else if (res >= 80 && res < 90) {
      this.setState({
        grade: "B"
      });
    } else if (res >= 90 && res <= 100) {
      this.setState({
        grade: "A"
      });
    }
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.getGrade(this.state.num1, this.state.num2, this.state.num3);
    }
  };

  render() {
    const { grade, num1, num2, num3 } = this.state;
    return (
      <div>
        <p>
          Kata:
          https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
        </p>
        <h1> Grade Book </h1>
        <h3>
          {" "}
          fairly simple stuff. enter in a numbers between 0 and 100 and you'll
          get a letter grade back for the average between them{" "}
        </h3>
        <h4> Grade = {grade}</h4>
        <input
          type="number"
          placeholder="Grade 1"
          onChange={e => this.handleChange("num1", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <input
          type="number"
          placeholder="Grade 2"
          onChange={e => this.handleChange("num2", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <input
          type="number"
          placeholder="Grade 3"
          onChange={e => this.handleChange("num3", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.getGrade(num1, num2, num3)}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default Grades;
