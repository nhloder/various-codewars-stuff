import React, { Component } from "react";
import { Link } from "react-router-dom";

class LettersToNumbers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      sentence: "",
      toggle: false
    };
  }

  alphabetPosition = text => {
    let { sentence } = this.state;
    for (let i = 0; i <= text.length; i++) {
      if ((text[i] = "A" || "a")) {
        sentence.push(`1, `);
      }
      if ((text[i] = "B" || "b")) {
        sentence.push(`2, `);
      }
      if ((text[i] = "C" || "c")) {
        sentence.push(`3, `);
      }
      if ((text[i] = "D" || "d")) {
        sentence.push(`4, `);
      }
      if ((text[i] = "E" || "e")) {
        sentence.push(`5, `);
      }
      if ((text[i] = "F" || "f")) {
        sentence.push(`6, `);
      }
      if ((text[i] = "G" || "g")) {
        sentence.push(`7, `);
      }
      if ((text[i] = "H" || "h")) {
        sentence.push(`8, `);
      }
      if ((text[i] = "I" || "i")) {
        sentence.push(`9, `);
      }
      if ((text[i] = "J" || "j")) {
        sentence.push(`10, `);
      }
      if ((text[i] = "K" || "k")) {
        sentence.push(`11, `);
      }
      if ((text[i] = "L" || "l")) {
        sentence.push(`12, `);
      }
      if ((text[i] = "M" || "m")) {
        sentence.push(`13, `);
      }
      if ((text[i] = "N" || "n")) {
        sentence.push(`14, `);
      }
      if ((text[i] = "O" || "o")) {
        sentence.push(`15, `);
      }
      if ((text[i] = "P" || "p")) {
        sentence.push(`16, `);
      }
      if ((text[i] = "Q" || "q")) {
        sentence.push(`17, `);
      }
      if ((text[i] = "R" || "r")) {
        sentence.push(`18, `);
      }
      if ((text[i] = "S" || "s")) {
        sentence.push(`19, `);
      }
      if ((text[i] = "T" || "t")) {
        sentence.push(`20, `);
      }
      if ((text[i] = "U" || "u")) {
        sentence.push(`21, `);
      }
      if ((text[i] = "V" || "v")) {
        sentence.push(`22, `);
      }
      if ((text[i] = "W" || "w")) {
        sentence.push(`23, `);
      }
      if ((text[i] = "X" || "x")) {
        sentence.push(`24, `);
      }
      if ((text[i] = "Y" || "y")) {
        sentence.push(`25, `);
      }
      if ((text[i] = "z" || "Z")) {
        sentence.push(`26, `);
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
        <button onClick={(() => this.alphabetPosition(text), this.toggler)}>
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
