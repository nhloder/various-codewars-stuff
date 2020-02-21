import React, { Component } from "react";
import { Link } from "react-router-dom";
class Narcissism extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
      result: 'n/a'
    };
  }

  narcissistic = (val) => {
    let value = val.toString()
    let power = (val.toString().length);
    let arr = []
    for (let i = 0; i < value.length;i++){
      arr.push(Math.pow(value[i], power))
    }
    let res = arr.reduce((a, b) => a+b, 0)
    // console.log("power", power);
    // console.log("arr", arr);
    // console.log("res", res);
    // console.log("val", val);
    
    if (res.value === val.value || val.toString().length === 1){
      this.setState({
        result: "true"
      })
      return true
    }
    else {
      this.setState({
        result: "false"
      })
      return false
    }
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
    const { val, result } = this.state;
    return (
      <div>
        <p>Kata: https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript</p>
        <h1> Does my number look big in this? </h1>
        <h3> Checks to see wether or not a number is "Narcissistic", or  is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base </h3>
        <h4> Some Examples of narcissistic numbers: 0-9, 153, 370, 371, 1634, 8208, 9474, 54748, 92727, 93084, 548834, 1741725, 4210818 </h4>
        <input
          type="number"
          onChange={e => this.handleChange("val", e.target.value)}
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
        <br/>
        {result === "n/a" ? null : 
        <span> Is it Narcissistic? : {result} </span>
        }
      </div>
    );
  }
}


export default Narcissism;