import React from "react";
import Board from "../components/Board";
import Button from "../components/Button";

const InGame = () => {
  const undoHandler = () => {};
  const redoHandler = () => {};
  return (
    <div>
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
