import { createContext, useReducer } from "react";
import { GAME_SCREEN } from "../constants/constants";

const initState = {
  gameScreen: GAME_SCREEN.STARTGAME,
  boardSize: 3,
  winner: null,
  historyBoard: [],
  curIndex: -1,
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_GAME_SCREEN":
      return {
        ...state,
        gameScreen: action.payload.screen,
      };
    case "UPDATE_BOARD_SIZE":
      return {
        ...state,
        boardSize: +action.payload.boardSize,
      };
    case "PUSH_BOARD_HISTORY":
      const cloned = structuredClone(state.historyBoard);
      cloned.push(action.payload.historyBoard);
      return {
        ...state,
        historyBoard: cloned,
        curIndex: state.curIndex + 1,
      };
    case "INCREASE_INDEX":
      return {
        ...state,
        curIndex: state.curIndex + 1,
      };
    case "DECREASE_INDEX":
      return {
        ...state,
        curIndex: state.curIndex - 1,
      };
    case "GAME_OVER":
      return {
        ...state,
        gameScreen: GAME_SCREEN.ENDGAME,
        winner: action.payload.winner,
      };
    case "REPLAY":
      return initState;
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
