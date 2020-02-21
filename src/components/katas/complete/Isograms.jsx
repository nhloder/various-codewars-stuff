import React, { Component } from "react";
import { Link } from "react-router-dom";

class Isograms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: ""
    };
  }

  isIsogram = function(str) {
    let res = str.toLowerCase();
      var arr = [];
      for (var i = 0; i <= res.length; i++) {
        if (arr[res[i]] === undefined) {
          arr[res[i]] = 1;
        } else {
          console.log(false, 'not an Isogram');
          return false;
        }
      }
      console.log(true, 'is an isogram');
      return true;
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.isIsogram(this.state.str);
    }
  };

  render() {
    return (
      <div>
        <p>Kata: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript</p>
        <h1>Isogram</h1>
        <h3>An isogram is a logological term for a word or phrase without a repeating letter. <br/> This test checks wether or not your string is an Isogram. the result is shown in the console.</h3>
        <h4>Your Word: {this.state.str} </h4>
        <input
          type="text"
          onChange={e => this.handleChange("str", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.isIsogram(this.state.str)}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default Isograms;
