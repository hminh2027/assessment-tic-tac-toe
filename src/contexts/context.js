import { createContext, useReducer } from "react";
import { GAME_SCREEN, PLAYER } from "../constants/constants";

const initState = {
  gameScreen: GAME_SCREEN.STARTGAME,
  boardSize: 3,
  winner: null,
  historyBoard: [],
  historyIndex: -1,
  nextPlayer: PLAYER.PLAYER_1,
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_GAME_SCREEN":
      return {
        ...state,
        gameScreen: action.payload.screen,
      };
    case "UPDATE_BOARD_SIZE":
      return {
        ...state,
        boardSize: +action.payload.boardSize,
      };
    case "CHANGE_NEXT_PLAYER":
      return {
        ...state,
        nextPlayer: action.payload.nextPlayer,
      };
    case "ADD_HISTORY":
      const cloned = structuredClone(state.historyBoard).slice(
        0,
        state.historyIndex + 1
      );
      cloned.push(action.payload.historyBoard);
      return {
        ...state,
        historyBoard: cloned,
        historyIndex: state.historyIndex + 1,
      };
    case "REDO":
      if (state.historyIndex === state.historyBoard.length - 1) return state;

      return {
        ...state,
        historyIndex: state.historyIndex + 1,
        nextPlayer:
          state.nextPlayer === PLAYER.PLAYER_1
            ? PLAYER.PLAYER_2
            : PLAYER.PLAYER_1,
      };
    case "UNDO":
      if (state.historyIndex === 0) return state;

      return {
        ...state,
        historyIndex: state.historyIndex - 1,
        nextPlayer:
          state.nextPlayer === PLAYER.PLAYER_1
            ? PLAYER.PLAYER_2
            : PLAYER.PLAYER_1,
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
