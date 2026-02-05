import { createContext, useContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("Game Context must be used within GameProvider");
  return context;
}
