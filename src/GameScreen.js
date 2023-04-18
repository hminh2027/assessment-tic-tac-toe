import React, { useState } from "react";
import Board from "./components/Board";

const GameScreen = () => {
  const [state, setState] = useState({
    size: 3,
    countToWin: 3,
    isXNext: true,
  });

  return (
    <div>
      <Board state={state} setState={setState} />
    </div>
  );
};

export default GameScreen;
