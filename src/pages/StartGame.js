import React, { useContext } from "react";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { GAME_SCREEN } from "../constants/constants";
import { AppContext } from "../contexts/context";

const StartGame = () => {
  const { dispatch } = useContext(AppContext);

  const playGame = () =>
    dispatch({
      type: "UPDATE_GAME_SCREEN",
      payload: { screen: GAME_SCREEN.INGAME },
    });

  return (
    <div className="-mt-16 text-center">
      <div className="py-8 text-5xl font-bold ">Welcome to Tic Tac Toe!</div>
      <div>
        <Button
          fn={playGame}
          text={"Start"}
          bg={"bg-black"}
          color={"text-white"}
        />
      </div>
      <Dropdown />
    </div>
  );
};

export default StartGame;
