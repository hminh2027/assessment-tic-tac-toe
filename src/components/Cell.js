import React, { useState, useEffect } from "react";
import XIcon from "../assets/x-icon.png";
import YIcon from "../assets/y-icon.png";
import { PLAYER } from "../constants/constants";

const Cell = ({ value, cellClickHandler, col, row }) => {
  const [displayIcon, setDisplayIcon] = useState(null);

  useEffect(() => {
    if (!value) return;
    setDisplayIcon(value === PLAYER.PLAYER_1 ? XIcon : YIcon);
  }, [value]);

  return (
    <div className="flex h-32 w-32  items-center border-2 border-black">
      <div
        className="mx-auto h-24 w-24"
        onClick={() => cellClickHandler(row, col)}
        style={{
          background: `url(${displayIcon}) no-repeat center center/cover`,
        }}
      ></div>
    </div>
  );
};

export default Cell;
