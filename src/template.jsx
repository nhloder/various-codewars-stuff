import React, { Component } from "react";
import { Link } from "react-router-dom";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vari: ""
    };
  }

  testFn = () => {
    
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.testFn(this.state.str);
    }
  };

  render() {
    const {vari} = this.state
    return (
      <div>
        <p>Kata: </p>
        <h1> title </h1>
        <h3> Description </h3>
        <input
          type="text"
          onChange={e => this.handleChange("str", e.target.value)}
          onKeyPress={this.handleKeyPress}
        />
        <br />
        <br />
        <button onClick={() => this.testFn()}>Test</button>
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

{/* <Link to = '/componentName'> 
<button>componentName</button>
</Link> */}

{/* <Route path = '/componentname' component = {componentName} /> */}