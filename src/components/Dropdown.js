import React, { useContext } from "react";
import { AppContext } from "../contexts/context";

const optionList = [3, 5, 7];

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
      className="m-4 w-32 rounded-lg bg-black py-3 text-center text-lg font-bold text-white shadow-md shadow-slate-500 "
    >
      {optionList.map((option) => (
        <option
          defaultChecked
          className="rounded-lg p-3"
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
