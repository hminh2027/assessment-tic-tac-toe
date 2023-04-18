import { createContext, useReducer } from "react";
import { GAME_SCREEN } from "../constants/constants";

const initState = {
  gameScreen: GAME_SCREEN.STARTGAME,
  boardSize: 3,
  cellsToWin: 3,
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_GAME_SCREEN":
      return {
        ...state,
        gameScreen: action.payload.screen,
      };
    case "UPDATE_GAME_SETTING":
      return {
        ...state,
        boardSize: action.payload.boardSize,
        cellsToWin: action.payload.cellsToWin,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initState);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
