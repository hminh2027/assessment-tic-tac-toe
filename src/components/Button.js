import React from "react";

const Button = ({ fn, color, bg, text }) => {
  return (
    <button
      className={`m-2 w-32 rounded-lg py-3 text-lg font-bold shadow-sm shadow-slate-500 ${color} ${bg}`}
      onClick={fn}
    >
      {text}
    </button>
  );
};

export default Button;
