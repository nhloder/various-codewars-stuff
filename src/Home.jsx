import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <h1>K A T A S :</h1>
      <Link to="/isograms">
        <button>Isograms</button>
      </Link>
    </div>
  );
}

export default Home;