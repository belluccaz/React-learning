import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "purple",
  fontFamily: "Courier",
  fontSize: "25px",
  fontWeigth: "bolder",
  border: "1px solid black",
};

// customStyle = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
