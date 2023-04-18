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
    const rs = victoryCheck(newCells);
    console.log(rs);
    setPlayerTurn(
      playerTurn === PLAYER.PLAYER_1 ? PLAYER.PLAYER_2 : PLAYER.PLAYER_1
    );
  };

  const victoryCheck = (cells) => {
    for (let i = 0; i < 3; i++) {
      if (cells[i][0] === cells[i][1] && cells[i][0] === cells[i][2])
        return cells[i][0];
    }

    for (let i = 0; i < 3; i++) {
      if (cells[0][i] === cells[1][i] && cells[0][i] === cells[2][i])
        return cells[0][i];
    }

    if (board[0][0] === board[1][1] && board[1][1] === board[2][2])
      return board[0][0];

    if (board[0][2] === board[1][1] && board[1][1] === board[2][0])
      return board[0][2];

    return null;
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
