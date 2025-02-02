import React from "react";
import ReactDOM from "react-dom";

const myName = "Lucas Bellucci";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Exercise</h1>
    <p>Created by {myName}.</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
