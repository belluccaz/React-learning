// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
//import animals, { useAnimals } from "./data";

//console.log(animals);
//const [cat, dog] = animals;

//const [animal, makeSound] = useAnimals(cat);
//console.log(animal);
//makeSound();

//Destructuring Objects
//const { name, sound } = cat;
//const { name: catName, sound: catSound } = cat;
//const { name = "Fluffy", sound = "Purr" } = cat;
//const {
//  name,
//  sound,
//  feedingRequirements: { food, water },
//} = cat;

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;

const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

//console.log(cars);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
