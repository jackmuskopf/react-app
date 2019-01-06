import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import "https://use.fontawesome.com/releases/v5.3.1/css/all.css"
import "https://fonts.googleapis.com/css?family=Raleway:400,200"

ReactDOM.render(
<div>
  <nav class="social">
    <ul>
      <li><a href="https://github.com/jackmuskopf">Github <i class="fab fa-github"></i></a></li>
      <li><a href="www.linkedin.com/in/john-muskopf">LinkedIn <i class="fab fa-linkedin"></i></a></li>
    </ul>
  </nav>
  <div class="main">
    <p>No, no, it's okay, really</p>
    <h1>you don't have</h1>
    <p>to stay</p>
    <img src="./assets/dragon.png" class="pic">
    <p>
      <a href="./index.html/">These</a> | 
      <a href="index.html"">Are just</a> | 
      <a href="a;las;ldjas;dflka">Links</a> | 
      Except this
    </p>
  </div>
</div>, document.getElementById("root"));