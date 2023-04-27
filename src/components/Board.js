import React, { useContext, useEffect, useState } from "react";
import { PLAYER } from "../constants/constants";
import { AppContext } from "../contexts/context";
import Cell from "./Cell";

const Board = () => {
  const { state, dispatch } = useContext(AppContext);
  const [cells, setCells] = useState([]);
  const [moveCount, setMoveCount] = useState(0);

  useEffect(() => {
    if (drawCheck()) dispatch({ type: "GAME_OVER", payload: { winner: null } });
  }, [moveCount]);

  useEffect(() => {
    if (state.historyBoard.length === 0) return;
    setCells(state.historyBoard[state.historyIndex]);
  }, [state.historyIndex]);

  const cellClickHandler = (row, col) => {
    // Check if cell is ticked
    if (cells[row][col]) return;

    // Clone new cells and update
    const newCells = structuredClone(cells);
    newCells[row][col] = state.nextPlayer;

    // Check winner
    const winner = victoryCheck(newCells, row, col);
    if (winner) dispatch({ type: "GAME_OVER", payload: { winner } });

    // Add history
    dispatch({
      type: "ADD_HISTORY",
      payload: { historyBoard: newCells },
    });

    // Add move count
    setMoveCount((c) => c + 1);

    // Set player turn
    dispatch({
      type: "CHANGE_NEXT_PLAYER",
      payload: {
        nextPlayer:
          state.nextPlayer === PLAYER.PLAYER_1
            ? PLAYER.PLAYER_2
            : PLAYER.PLAYER_1,
      },
    });
  };

  const victoryCheck = (cells, rowIdx, colIdx) => {
    // Check row
    for (let col = 0; col < state.boardSize - 1; col++) {
      if (cells[rowIdx][col] !== cells[rowIdx][col + 1] || !cells[rowIdx][col])
        break;
      if (col + 1 === state.boardSize - 1) return cells[rowIdx][col];
    }

    // Check column
    for (let row = 0; row < state.boardSize - 1; row++) {
      if (cells[row][colIdx] !== cells[row + 1][colIdx] || !cells[row][colIdx])
        break;
      if (row + 1 === state.boardSize - 1) return cells[row][colIdx];
    }

    // Check diagonal
    for (let i = 1; i < state.boardSize; i++) {
      if (cells[0][0] !== cells[i][i]) break;
      if (i === state.boardSize - 1) return cells[0][0];
    }

    // Check reverse diagonal
    for (let i = 1; i < state.boardSize; i++) {
      if (cells[0][state.boardSize - 1] !== cells[i][state.boardSize - 1 - i])
        break;
      if (i === state.boardSize - 1) return cells[0][state.boardSize - 1];
    }

    return null;
  };

  const drawCheck = () => moveCount === state.boardSize * state.boardSize;

  return (
    <div>
      {cells.length > 0 &&
        cells.map((row, rowIdx) => (
          <div key={rowIdx} className="flex justify-center">
            {row.length > 0 &&
              row.map((col, colIdx) => (
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
