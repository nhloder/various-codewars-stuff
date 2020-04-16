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
    console.log("good", good, "evil", evil);
    let goodArr = good.split(" ");
    let evilArr = evil.split(" ");
    let gt = []
    let et = []

    gt.push(+goodArr[0])
    if (goodArr[1]){
      gt.push(+goodArr[1] * 2) 
    } else gt.push(0)
    if (goodArr[2]){
      gt.push(+goodArr[2] * 3) 
    } else gt.push(0)
    if (goodArr[3]){
      gt.push(+goodArr[3] * 3) 
    } else gt.push(0)
    if (goodArr[4]){
      gt.push(+goodArr[4] * 4) 
    } else gt.push(0)
    if (goodArr[5]){
      gt.push(+goodArr[5] * 10) 
    } else gt.push(0)

    et.push(+evilArr[0])
    if (evilArr[1]){
      et.push(+evilArr[1] * 2) 
    } else et.push(0)
    if (evilArr[2]){
      et.push(+evilArr[2] * 2) 
    } else et.push(0)
    if (evilArr[3]){
      et.push(+evilArr[3] * 2) 
    } else et.push(0)
    if (evilArr[4]){
      et.push(+evilArr[4] * 3) 
    } else et.push(0)
    if (evilArr[5]){
      et.push(+evilArr[5] * 5) 
    } else et.push(0)
    if (evilArr[6]){
      et.push(+evilArr[6] * 10) 
    } else et.push(0)

    console.log(gt, et);
    let goodVal = gt.reduce((a, b) => a + b, 0);
    let evilVal = et.reduce((a, b) => a + b, 0);
    console.log("goodVal", goodVal);
    console.log("evilVal", evilVal);

    if (+goodVal > +evilVal) {
      this.setState({
        res: "Battle Result: Good triumphs over Evil",
      });
    } else if (+goodVal < +evilVal) {
      this.setState({
        res: "Battle Result: Evil eradicates all trace of Good",
      });
    } else if (+goodVal === +evilVal) {
      this.setState({
        res: "Battle Result: No victor on this battle field",
      });
    }
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
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
            <br />
            On the side of good we have the following races, with their
            associated worth: Hobbits: 1, Men: 2, Elves: 3, Dwarves: 3, Eagles:
            4, Wizards: 10
            <br />
            On the side of evil we have: Orcs: 1, Men: 2, Wargs: 2, Goblins: 2,
            Uruk Hai: 3, Trolls: 5, Wizards: 10
            <br />
            <br />
            Although weather, location, supplies and valor play a part in any
            battle, if you add up the worth of the side of good and compare it
            with the worth of the side of evil, the side with the larger worth
            will tend to win. Thus, given the count of each of the races on the
            side of good, followed by the count of each of the races on the side
            of evil, determine which side wins.
          </h3>
          <br />
          <br />
          <h4>
            The requirements for the inputs on this kata are strange and not at
            all how I would do it. It takes in the values of "good" and "evil"
            as stings with each number separated by a single space, with no
            commas, instead of an array of numbers, i'll try and find a
            conversion after I pass the Kata, in other words I'll have it make
            more sense and provide the code needed for the Kata below the code
            that I would prefer to use in a real front end application.
          </h4>
          <br />
          <h2> {res ? res : null} </h2>
        </div>
        <div className="contentBox-gve">
          <div className="box-left-gve">
            <h4> Good </h4>
            <p>Hobbits, Men, Elves, Dwarves, Eagles, Wizards</p>
            <input
              type="text"
              placeholder="Good"
              onChange={(e) => this.handleChange("good", e.target.value)}
            />
          </div>
          <div className="box-right-gve">
            <h4> Evil </h4>
            <p>Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards</p>
            <input
              type="text"
              placeholder="Evil"
              onChange={(e) => this.handleChange("evil", e.target.value)}
            />
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
