import React, { useContext } from "react";
import { AppContext } from "../contexts/context";

const optionList = [
  { name: "3x3", size: 3, rule: 3 },
  { name: "5x5", size: 5, rule: 4 },
];

const Dropdown = () => {
  const { dispatch } = useContext(AppContext);

  const onChangeHandler = (e) =>
    dispatch({
      type: "UPDATE_GAME_SETTING",
      payload: {
        boardSize: optionList[e.target.value].size,
        cellsToWin: optionList[e.target.value].rule,
      },
    });

  return (
    <select
      onChange={onChangeHandler}
      name="setting"
      className="m-4 w-32 rounded-lg bg-black py-3 text-center text-lg font-bold text-white shadow-md shadow-slate-500 "
    >
      {optionList.map((option, index) => (
        <option
          defaultChecked
          className="rounded-lg p-3"
          value={index}
          key={option.name}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
