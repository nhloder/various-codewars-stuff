import React, { Component } from "react";
import { Link } from "react-router-dom";

class WordSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "",
      finish: ""
    };
  }

  spinWords = str => {
    let arr = str.split(" ");
    // console.log("arr", arr);
    let fin = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < 5) {
        fin.push(arr[i]);
      } else if (arr[i].length >= 5) {
        fin.push(
          arr[i]
            .split("")
            .reverse()
            .join("")
        );
      }
    }
    this.setState({
      finish: fin.join(" ")
    });
  };

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
    const { str, finish } = this.state;
    return (
      <div>
        <p>
          Kata:
          https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
        </p>
        <h1> Stop gninnipS My sdroW! </h1>
        <h3>
          {" "}
          Takes in a string of words, and returns the same string, but all
          five or more letter words are reversed{" "}
        </h3>
        {finish ? 
        <>
        <span>Output: {finish} </span> 
        <br/>
        </>
        : null
        }
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

// actual code :
// function spinWords(str){
//   let arr = str.split(' ');
//   console.log('arr', arr);
//   let fin = []
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i].length < 5){
//       fin.push(arr[i])
//     }
//     else if (arr[i].length >= 5){
//       fin.push(arr[i].split('').reverse().join(''))
//     }
//   }
//   return fin.join(' ')
// };
