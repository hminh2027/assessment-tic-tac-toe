import React, { useContext, useEffect, useState } from "react";
import { GAME_SCREEN } from "./constants/constants";
import { AppContext } from "./contexts/context";
import EndGame from "./pages/EndGame";
import InGame from "./pages/InGame";
import StartGame from "./pages/StartGame";

const GameScreenManager = () => {
  const { state } = useContext(AppContext);
  const [screen, setScreen] = useState();

  useEffect(() => {
    switch (state.gameScreen) {
      case GAME_SCREEN.STARTGAME:
        setScreen(<StartGame />);
        break;
      case GAME_SCREEN.INGAME:
        setScreen(<InGame />);
        break;
      case GAME_SCREEN.ENDGAME:
        setScreen(<EndGame />);
        break;
      default:
        setScreen(<StartGame />);
        break;
    }
  }, [state.gameScreen]);

  return <div className="mx-auto w-5/12 py-10">{screen}</div>;
};

export default GameScreenManager;
