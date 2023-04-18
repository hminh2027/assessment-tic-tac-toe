import React, { useState } from "react";
import { useEffect } from "react";
import XIcon from "../assets/x-icon.png";
import YIcon from "../assets/y-icon.png";

const Cell = ({ value, cellClickHandler, col, row }) => {
  const [displayIcon, setDisplayIcon] = useState();

  useEffect(() => {
    if (!value) return;
    setDisplayIcon(value === "x" ? XIcon : YIcon);
  }, [value]);
  return (
    <button onClick={() => cellClickHandler(row, col)}>
      <img width="20px" src={displayIcon} />
    </button>
  );
};

export default Cell;
