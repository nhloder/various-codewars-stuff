import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Recipe.css'

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
      available: {}
    };
  }

  cakes = () => {
    const {recipe, available} = this.state
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.cakes(this.state.vari);
    }
  };

  render() {
    const { recipe, available } = this.state;
    return (
      <div>
        <div className="titleBox"></div>
        <p>Kata: https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript</p>
        <h1> Pete, the baker </h1>
        <h3> Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good at math. Can you help him find out how many cakes he could bake considering his recipes? </h3>
        <div className="inputBox">
          <div className="leftBox">

          </div>
          <div className="rightBox"></div>
        </div>
        <input
          type="text"
          onChange={e => this.handleChange("vari", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.cakes()}>Test</button>
        <br />
        <br />
        <Link to="/">
          <button> Home </button>
        </Link>
      </div>
    );
  }
}

export default componentName;