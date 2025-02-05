import React from "react";
import ReactDOM from "react-dom";

const fName = "Lucas";
const lName = "Bellucci";
const luckyNumber = 11;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}!</h1>
    <p>Your lucky number is {luckyNumber}.</p>
  </div>,
  document.getElementById("root")
);

// concatenação = {fName + " " + lName} - mais legível
// interpolação = {`${fName} ${lName}`} - mais técnico (ES6)
// simplismo = {fName} {lName}
