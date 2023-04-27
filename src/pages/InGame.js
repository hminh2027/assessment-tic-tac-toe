import React, { useContext, useEffect, useState } from "react";
import Board from "../components/Board";
import Button from "../components/Button";
import { AppContext } from "../contexts/context";

const InGame = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const initBoard = Array(state.boardSize)
      .fill("")
      .map(() => Array(state.boardSize).fill(""));

    dispatch({
      type: "ADD_HISTORY",
      payload: {
        historyBoard: initBoard,
      },
    });
  }, []);

  const undoHandler = () => dispatch({ type: "UNDO" });
  const redoHandler = () => dispatch({ type: "REDO" });
  return (
    <div>
      <div className="my-4 text-2xl font-bold text-center">
        It's <span className="text-violet-600">{state.nextPlayer}</span> next
        turn
      </div>
      <Board />
      <div className="my-5 text-center">
        <Button
          fn={undoHandler}
          text={"Undo"}
          bg={"bg-black"}
          color={"text-white"}
        />
        <Button
          fn={redoHandler}
          text={"Redo"}
          bg={"bg-black"}
          color={"text-white"}
        />
      </div>
    </div>
  );
};

export default InGame;
