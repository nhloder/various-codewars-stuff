import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GoodVEvil.css";

class MiddleEarth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: "",
      evil: "",
      res: "",
    };
  }

  goodVsEvil = () => {
    const { good, evil } = this.state;

    let goodVal = good.reduce((a, b) => a + b, 0);
    let evilVal = evil.reduce((a, b) => a + b, 0);
    console.log("goodVal", goodVal);
    console.log("evilVal", evilVal);

    if (goodVal > evilVal) {
      this.setState({
        res: "Battle Result: Good triumphs over Evil",
      });
    } else if (goodVal < evilVal) {
      this.setState({
        res: "Battle Result: Evil eradicates all trace of Good",
      });
    } else if (goodVal === evilVal) {
      this.setState({
        res: "Battle Result: No victor on this battlefield",
      });
    }
  };

  handleGood = (e) => {
    if (!e) {
      let val = 0;
      this.state.good.push(val);
    } else if (e) {
      let val = e;
      this.state.good.push(val);
    }
    console.log(this.state.good);
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.goodVsEvil(this.state.good, this.state.evil);
    }
  };

  render() {
    const { good, evil, res } = this.state;
    return (
      <div>
        <div className="topbit-gve">
          <p>
            Kata:
            https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript
          </p>
          <h1> Good Vs Evil </h1>
          <h3>
            {" "}
            Middle Earth is about to go to war. The forces of good will have
            many battles with the forces of evil. Different races will certainly
            be involved. Each race has a certain worth when battling against
            others.
            <br />
            On the side of good we have the following races, with their
            associated worth: Hobbits: 1, Men: 2, Elves: 3, Dwarves: 3, Eagles:
            4, Wizards: 10
            <br />
            On the side of evil we have: Orcs: 1 Men: 2 Wargs: 2 Goblins: 2 Uruk
            Hai: 3 Trolls: 5 Wizards: 10
            <br />
            Although weather, location, supplies and valor play a part in any
            battle, if you add up the worth of the side of good and compare it
            with the worth of the side of evil, the side with the larger worth
            will tend to win. Thus, given the count of each of the races on the
            side of good, followed by the count of each of the races on the side
            of evil, determine which side wins.
          </h3>
          <br/>
          <br/>
          <h4>The requirements for the inputs on this kata are strange and not at all how I would do it. It takes in the values of "good" and "evil" as stings with each number separated by a single space, instead of an array of numbers, i'll try and find a conversion after I pass the Kata, in other words I'll have it make more sense and provide the code needed for the Kata below the code that I would prefer to use in a real front end application.</h4>
          <br/>
          <h2> {res ? res : null} </h2>
        </div>
        <div className="contentBox-gve">
          <div className="box-left-gve">
            <h4> Good </h4>
            <input type="text" placeholder="Good" />
          </div>
          <div className="box-right-gve">
            <h4> Evil </h4>
            <input type="text" placeholder="Evil" />
          </div>
        </div>
        <br />
        <br />
        <button onClick={() => this.goodVsEvil(good, evil)}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default MiddleEarth;

// <p>
//               {" "}
//               Hobbits{" "}
//               <input
//                 type="number"
//                 placeholder="Hobbits"
//                 onFocusChange={(e) => this.handleGood(e.target.value)}
//               />{" "}
//             </p>
//             <p>
//               {" "}
//               Men{" "}
//               <input
//                 type="number"
//                 placeholder="Men"
//                 onFocusChange={(e) => this.handleGood(e.target.value)}
//               />{" "}
//             </p>
//             <p>
//               {" "}
//               Elves{" "}
//               <input
//                 type="number"
//                 placeholder="Elves"
//                 onFocusChange={(e) => this.handleGood(e.target.value)}
//               />{" "}
//             </p>
//             <p>
//               {" "}
//               Dwarves{" "}
//               <input
//                 type="number"
//                 placeholder="Dwarves"
//                 onFocusChange={(e) => this.handleGood(e.target.value)}
//               />{" "}
//             </p>
//             <p>
//               {" "}
//               Eagles{" "}
//               <input
//                 type="number"
//                 placeholder="Eagles"
//                 onFocusChange={(e) => this.handleGood(e.target.value)}
//               />{" "}
//             </p>
//             <p>
//               {" "}
//               Wizards{" "}
//               <input
//                 type="number"
//                 placeholder="Wizards"
//                 onFocusChange={(e) => this.handleGood(e.target.value)}
//               />{" "}
//             </p>

{
  /* <p>
              {" "}
              Orcs <input type="number" placeholder="Orcs" />{" "}
            </p>
            <p>
              {" "}
              Men <input type="number" placeholder="Men" />{" "}
            </p>
            <p>
              {" "}
              Wargs <input type="number" placeholder="Wargs" />{" "}
            </p>
            <p>
              {" "}
              Goblins <input type="number" placeholder="Goblins" />{" "}
            </p>
            <p>
              {" "}
              Uruk Hai <input type="number" placeholder="Uruk Hai" />{" "}
            </p>
            <p>
              {" "}
              Trolls <input type="number" placeholder="Trolls" />{" "}
            </p>
            <p>
              {" "}
              Wizards <input type="number" placeholder="Wizards" />{" "}
            </p> */
}
