import React, { useState } from "react";
import Cell from "./Cell";

const Board = ({ state, setState }) => {
  const size = 7;
  const [cells, setCells] = useState(
    Array(size)
      .fill(null)
      .map((x) => Array(size).fill(null))
  );

  const cellClickHandler = (row, col) => {
    if (cells[row][col]) return;
    const newCells = cells.slice();

    if (state.isXNext) {
      newCells[row][col] = "x";
      setState({ ...state, isXNext: false });
    } else {
      newCells[row][col] = "y";
      setState({ ...state, isXNext: true });
    }
  };

  return (
    <div>
      {cells.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((col, colIdx) => (
            <Cell
              key={colIdx}
              value={cells[rowIdx][colIdx]}
              cellClickHandler={cellClickHandler}
              col={colIdx}
              row={rowIdx}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
