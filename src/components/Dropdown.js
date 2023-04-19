import React, { useContext } from "react";
import { AppContext } from "../contexts/context";

const optionList = [3, 4, 5];

const Dropdown = () => {
  const { dispatch } = useContext(AppContext);

  const onChangeHandler = (e) =>
    dispatch({
      type: "UPDATE_BOARD_SIZE",
      payload: {
        boardSize: e.target.value,
      },
    });

  return (
    <select
      onChange={onChangeHandler}
      name="setting"
      className="w-32 py-3 m-4 text-lg font-bold text-center text-white bg-black rounded-lg shadow-sm shadow-slate-500 "
    >
      {optionList.map((option) => (
        <option
          defaultChecked
          className="p-3 rounded-lg"
          value={option}
          key={option}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
