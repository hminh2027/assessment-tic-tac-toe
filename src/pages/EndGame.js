import React, { useContext } from "react";
import Button from "../components/Button";
import { AppContext } from "../contexts/context";

const EndGame = () => {
  const { state, dispatch } = useContext(AppContext);

  const replay = () => dispatch({ type: "REPLAY" });
  return (
    <div className="-mt-16 text-center">
      <div className="py-8 text-5xl font-bold ">
        {state.winner ? (
          <div>
            Congratulation!
            <br />
            <br />
            {state.winner} is the winner!
          </div>
        ) : (
          "Draw!"
        )}
      </div>
      <div>
        <Button
          fn={replay}
          text={"Replay"}
          bg={"bg-black"}
          color={"text-white"}
        />
      </div>
    </div>
  );
};

export default EndGame;
