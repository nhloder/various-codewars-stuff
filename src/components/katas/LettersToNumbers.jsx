import React, { Component } from "react";
import { Link } from "react-router-dom";

class LettersToNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      sentence: [],
      toggle: false
    };
  }

  alphabetPosition = text => {
    let { sentence } = this.state;
    // console.log();
    this.setState(prevState => {
      return { toggle: !prevState.toggle };
    });
    for (let i = 0; i < text.length; i++) {
      if (text[i].toUpperCase() === "A") {
        sentence.push(`1 `);
      } else if (text[i].toUpperCase() === "B") {
        sentence.push(`2 `);
      } else if (text[i].toUpperCase() === "C") {
        sentence.push(`3 `);
      } else if (text[i].toUpperCase() === "D") {
        sentence.push(`4 `);
      } else if (text[i].toUpperCase() === "E") {
        sentence.push(`5 `);
      } else if (text[i].toUpperCase() === "F") {
        sentence.push(`6 `);
      } else if (text[i].toUpperCase() === "G") {
        sentence.push(`7 `);
      } else if (text[i].toUpperCase() === "H") {
        sentence.push(`8 `);
      } else if (text[i].toUpperCase() === "I") {
        sentence.push(`9 `);
      } else if (text[i].toUpperCase() === "J") {
        sentence.push(`10 `);
      } else if (text[i].toUpperCase() === "K") {
        sentence.push(`11 `);
      } else if (text[i].toUpperCase() === "L") {
        sentence.push(`12 `);
      } else if (text[i].toUpperCase() === "M") {
        sentence.push(`13 `);
      } else if (text[i].toUpperCase() === "N") {
        sentence.push(`14 `);
      } else if (text[i].toUpperCase() === "O") {
        sentence.push(`15 `);
      } else if (text[i].toUpperCase() === "P") {
        sentence.push(`16 `);
      } else if (text[i].toUpperCase() === "Q") {
        sentence.push(`17 `);
      } else if (text[i].toUpperCase() === "R") {
        sentence.push(`18 `);
      } else if (text[i].toUpperCase() === "S") {
        sentence.push(`19 `);
      } else if (text[i].toUpperCase() === "T") {
        sentence.push(`20 `);
      } else if (text[i].toUpperCase() === "U") {
        sentence.push(`21 `);
      } else if (text[i].toUpperCase() === "V") {
        sentence.push(`22 `);
      } else if (text[i].toUpperCase() === "W") {
        sentence.push(`23 `);
      } else if (text[i].toUpperCase() === "X") {
        sentence.push(`24 `);
      } else if (text[i].toUpperCase() === "Y") {
        sentence.push(`25 `);
      } else if (text[i].toUpperCase() === "Z") {
        sentence.push(`26 `);
      } else {
        sentence.push(`${text[i]} `);
      }
    }
    console.log("sentence", sentence);
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
      return { toggle: !prevState.toggle };
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
        <br />
        <input
          type="text"
          onChange={e => this.handleChange("text", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.alphabetPosition(this.state.text)}>
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

//! Actual input code below
// alphabetPosition = text => {
//   let sentence = [];
//   for (let i = 0; i < text.length; i++) {
//     if (text[i].toUpperCase() === "A") {
//       sentence.push(`1 `);
//     } else if (text[i].toUpperCase() === "B") {
//       sentence.push(`2 `);
//     } else if (text[i].toUpperCase() === "C") {
//       sentence.push(`3 `);
//     } else if (text[i].toUpperCase() === "D") {
//       sentence.push(`4 `);
//     } else if (text[i].toUpperCase() === "E") {
//       sentence.push(`5 `);
//     } else if (text[i].toUpperCase() === "F") {
//       sentence.push(`6 `);
//     } else if (text[i].toUpperCase() === "G") {
//       sentence.push(`7 `);
//     } else if (text[i].toUpperCase() === "H") {
//       sentence.push(`8 `);
//     } else if (text[i].toUpperCase() === "I") {
//       sentence.push(`9 `);
//     } else if (text[i].toUpperCase() === "J") {
//       sentence.push(`10 `);
//     } else if (text[i].toUpperCase() === "K") {
//       sentence.push(`11 `);
//     } else if (text[i].toUpperCase() === "L") {
//       sentence.push(`12 `);
//     } else if (text[i].toUpperCase() === "M") {
//       sentence.push(`13 `);
//     } else if (text[i].toUpperCase() === "N") {
//       sentence.push(`14 `);
//     } else if (text[i].toUpperCase() === "O") {
//       sentence.push(`15 `);
//     } else if (text[i].toUpperCase() === "P") {
//       sentence.push(`16 `);
//     } else if (text[i].toUpperCase() === "Q") {
//       sentence.push(`17 `);
//     } else if (text[i].toUpperCase() === "R") {
//       sentence.push(`18 `);
//     } else if (text[i].toUpperCase() === "S") {
//       sentence.push(`19 `);
//     } else if (text[i].toUpperCase() === "T") {
//       sentence.push(`20 `);
//     } else if (text[i].toUpperCase() === "U") {
//       sentence.push(`21 `);
//     } else if (text[i].toUpperCase() === "V") {
//       sentence.push(`22 `);
//     } else if (text[i].toUpperCase() === "W") {
//       sentence.push(`23 `);
//     } else if (text[i].toUpperCase() === "X") {
//       sentence.push(`24 `);
//     } else if (text[i].toUpperCase() === "Y") {
//       sentence.push(`25 `);
//     } else if (text[i].toUpperCase() === "Z") {
//       sentence.push(`26 `);
//     }
//   }
//   return sentence.join('').slice(0, -1)
