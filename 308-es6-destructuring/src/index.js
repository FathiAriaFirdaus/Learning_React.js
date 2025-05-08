// import animals, {useAnimal} from "./data.js";

// // Destructure Array
// const [cat, dog] = animals;
// console.log(dog);

// // // Destructure Object
// // const {name: catName, sound: catSound} = cat;
// // console.log(catName);
// // console.log(catSound);

// // // const {name = "Fluffy", sound = "purr"} = cat;

// // const {name, sound, feedingRequirements: {food, water}} = cat;
// // console.log(food);

// const [animal, makeSound] = (useAnimal(dog));
// console.log(animal);
// makeSound();



// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
console.log(honda);

const {coloursByPopularity: [hondaTopColour], speedStats: {topSpeed: hondaTopSpeed}} = honda;
const {coloursByPopularity: [teslaTopColour], speedStats: {topSpeed: teslaTopSpeed}} = tesla;
// const {topColour = hondaColour} = honda;

console.log(honda.model, tesla.model);
console.log(hondaTopColour, teslaTopColour);
console.log(hondaTopSpeed, teslaTopSpeed);

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
