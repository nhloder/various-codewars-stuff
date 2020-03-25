import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <div className="App">
      <h6>Repo: https://github.com/nhloder/various-codewars-stuff</h6>
      <h1>K A T A S :</h1>
      <Link to="/grades">
        <button>Grade Book</button>
      </Link>
      <br />
      <Link to="/isograms">
        <button>Isograms</button>
      </Link>
      <br />
      <Link to="/lettersToNumbers">
        <button>Alphabet Position</button>
      </Link>
      <br />
      <Link to="/squareDigits">
        <button>Square Every Digit</button>
      </Link>
      <br />
      <Link to="/narcissism">
        <button>Narcissism</button>
      </Link>
      <br />
      <Link to="/wordSpinner">
        <button>Word Spinner</button>
      </Link>
      <br />
      <Link to="/recipes">
        <button>Recipes</button>
      </Link>
    </div>
  );
}

export default Home;
