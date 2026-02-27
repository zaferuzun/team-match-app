import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    teams: { red: [], blue: [] },
    mainMode: null, // 'Seçimli' veya 'Normal'
    subMode: null,  // 'Derbi', 'Karma', vb.
    status: 'setup' // 'setup', 'playing', 'finished'
  });

  const saveTeams = (red, blue) => {
    setGameState(prev => ({ ...prev, teams: { red, blue } }));
  };

  const setModes = (main, sub) => {
    setGameState(prev => ({ ...prev, mainMode: main, subMode: sub }));
  };

  return (
    <GameContext.Provider value={{ gameState, saveTeams, setModes }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);