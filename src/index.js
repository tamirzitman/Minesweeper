import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// function createBoard(r, c, bombs) {
//   if (bombs > r * c) {
//     bombs = (r * c) / 3;
//   }
// }

// // Create empty aray:
// let grid = [];
// for (let row = 0; row < r; row++) {
//   let subArr = [];
//   for (let col = 0; col < c; col++) {
//     subArr.push(0);
//   }
//   grid.push(subArr);
// }

// [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [X, 0, 0, 0],
// ];

// // Place bombs
// let bombCount = 0;
// while (bombCount < bombs) {
//   let x = Math.floor(Math.random() * r);
//   let y = Math.floor(Math.random() * c);

//   if (grid[x][y] === 0) {
//     grid[x][y] = "X";
//     bombCount++;
//   }
// }

// //Neighbor Bomb Count

// return grid;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
