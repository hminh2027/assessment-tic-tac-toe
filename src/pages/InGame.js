import React, { useContext, useEffect, useState } from "react";
import Board from "../components/Board";
import Button from "../components/Button";
import { PLAYER } from "../constants/constants";
import { AppContext } from "../contexts/context";

const InGame = () => {
  const { state, dispatch } = useContext(AppContext);
  const [playerTurn, setPlayerTurn] = useState(PLAYER.PLAYER_1);

  useEffect(() => {
    const initBoard = Array(state.boardSize)
      .fill(null)
      .map((x) => Array(state.boardSize).fill(null));

    dispatch({
      type: "PUSH_BOARD_HISTORY",
      payload: {
        historyBoard: initBoard,
      },
    });
  }, []);

  // const undoHandler = () => dispatch({ type: "DECREASE_INDEX" });
  // const redoHandler = () => dispatch({ type: "INCREASE_INDEX" });
  return (
    <div>
      <div className="my-4 text-2xl font-bold text-center">
        It's <span className="text-violet-600">{playerTurn}</span> next turn
      </div>
      <Board
        historyBoard={state.historyBoard}
        curIndex={state.curIndex}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
      />
      {/* <div className="my-5 text-center">
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
      </div> */}
    </div>
  );
};

export default InGame;
