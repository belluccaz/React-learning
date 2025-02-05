import React from "react";
import ReactDom from "react-dom";
//Create a react app from scratch.
//It should display a h1 heading.
ReactDom.render(
  <div>
    <h1>Meus Filmes Favoritos</h1>
    <ul>
      <li>Matrix (todos);</li>
      <li>Oppenheimmer;</li>
      <li>Interestelar.</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
