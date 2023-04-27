import React from "react";

const Cell = ({ value, cellClickHandler, col, row }) => {
  return (
    <div
      onClick={() => cellClickHandler(row, col)}
      className="flex items-center w-32 h-32 border-2 border-black"
    >
      <div className="flex items-center justify-center w-24 h-24 mx-auto text-7xl">
        {value}
      </div>
    </div>
  );
};

export default Cell;
