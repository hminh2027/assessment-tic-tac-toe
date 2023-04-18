import React, { useContext, useState } from "react";
import { PLAYER } from "../constants/constants";
import { AppContext } from "../contexts/context";
import Cell from "./Cell";

const Board = () => {
  const { state, dispatch } = useContext(AppContext);
  const [playerTurn, setPlayerTurn] = useState(PLAYER.PLAYER_1);
  const [cells, setCells] = useState(
    Array(state.boardSize)
      .fill(null)
      .map((x) => Array(state.boardSize).fill(null))
  );

  const cellClickHandler = (row, col) => {
    if (cells[row][col]) return;

    const newCells = cells.slice();

    newCells[row][col] = playerTurn;
    const winner = victoryCheck(newCells);
    if (winner) dispatch({ type: "GAME_OVER", payload: { winner } });

    setPlayerTurn(
      playerTurn === PLAYER.PLAYER_1 ? PLAYER.PLAYER_2 : PLAYER.PLAYER_1
    );
  };

  const victoryCheck = (cells) => {
    // Check rows
    for (let row = 0; row < state.boardSize; row++) {
      let win = true;
      for (let col = 1; col < state.boardSize; col++) {
        if (cells[row][0] !== cells[row][col] || !cells[row][col]) {
          win = false;
        }
      }
      if (win) return cells[row][0];
    }

    // Check columns
    for (let col = 0; col < state.boardSize; col++) {
      let win = true;
      for (let row = 1; row < state.boardSize; row++) {
        if (cells[0][col] !== cells[row][col] || !cells[row][col]) {
          win = false;
        }
      }
      if (win) return cells[0][col];
    }

    // Check diagonals
    let result = cells[0][0];
    for (let i = 1; i < state.boardSize; i++) {
      if (cells[0][0] !== cells[i][i]) {
        result = null;
        break;
      }
    }
    if (result) return result;

    result = cells[0][state.boardSize - 1];
    for (let i = 1; i < state.boardSize; i++) {
      if (cells[0][state.boardSize - 1] !== cells[i][state.boardSize - 1 - i])
        result = null;
    }

    return result;
  };

  return (
    <div>
      {cells.map((row, rowIdx) => (
        <div key={rowIdx} className="flex justify-center">
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
