import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    teams: { red: [], blue: [] },
    mainMode: null,
    subMode: null,
    config: {
      teamSelectionType: null,
      sides: { red: '', blue: '' },
      whiteJerseyOwner: '',
      stadium: '',
      duration: null
    }
  });

  const saveTeams = (red, blue) => {
    setGameState(prev => ({ ...prev, teams: { red, blue } }));
  };

  const setModes = (main, sub) => {
    setGameState(prev => ({ ...prev, mainMode: main, subMode: sub }));
  };

  const saveConfig = (newConfig) => {
    setGameState(prev => ({ ...prev, config: { ...prev.config, ...newConfig } }));
  };

  return (
    <GameContext.Provider value={{ gameState, saveTeams, setModes, saveConfig }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);