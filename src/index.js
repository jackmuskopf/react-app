import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
<div>
  <nav className="social">
    <ul>
      <li><a href="https://github.com/jackmuskopf">Github <i className="fab fa-github"></i></a></li>
      <li><a href="www.linkedin.com/in/john-muskopf">LinkedIn <i className="fab fa-linkedin"></i></a></li>
    </ul>
  </nav>
  <div className="main">
    <p>No, no, it's okay, really</p>
    <h1>you don't have</h1>
    <p>to stay</p>
    <a href="/src/doom-fire/index.html/">
      <img src="./dragon.png" alt="dragon" className="pic"/>
    </a>
    <p>
      <a href="index.html">These</a> | 
      <a href="index.html">Are just</a> | 
      <a href="index.html">Links</a> | 
      Except this
    </p>
  </div>
</div>, document.getElementById("root"));