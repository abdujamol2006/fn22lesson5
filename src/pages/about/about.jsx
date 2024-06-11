import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  return (
    <div className="container">
      <h1 className="page">About</h1>
      <button className="btn">
        <Link to="/">Back to home</Link>
      </button>
    </div>
  );
}

export default About;
