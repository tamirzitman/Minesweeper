import React, { useEffect, useState } from "react";
import createBoard from "../util/createBoard";
import Cell from "./Cell";
import { revealed } from "../util/reveal";
import Modal from "./Modal";
import Timer from "./Timer";

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);

  // componenDisMount
  useEffect(() => {
    // Creating a board
    function freshBoard() {
      const newBoard = createBoard(10, 10, 20);
      setNonMineCount(10 * 10 - 15);
      setGrid(newBoard.board);
    }
    // Calling the function
    freshBoard();
  }, []);

  // on right click or flag cell
  const updateFlag = (e, x, y) => {
    // Avoid right click dropdown default behavior
    e.preventDefault();
    // Deep copy of a state
    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].flagged = true;
    setGrid(newGrid);

    console.log("Right  Click");
  };

  // Reveal Cell
  const revealCell = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      alert("mine found");
    } else {
      let newRevealedBoard = revealed(newGrid, x, y);
      setGrid(newRevealedBoard.arr);
    }
    newGrid[x][y].revealed = true;
    setGrid(newGrid);
  };

  return grid.map((singleRow, index1) => {
    return (
      <div style={{ display: "flex" }} key={index1}>
        {singleRow.map((singleBlock, index2) => {
          return (
            <Cell
              revealCell={revealCell}
              details={singleBlock}
              updateFlag={updateFlag}
              key={index2}
            />
          );
        })}
      </div>
    );
  });
};

export default Board;
