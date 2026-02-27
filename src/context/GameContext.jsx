import React, { createContext, useState, useContext } from 'react';
import { TEAMS } from '../constants/gameSettings';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const initialState = {
    teams: { [TEAMS.RED.ID]: [], [TEAMS.BLUE.ID]: [] },
    mainMode: null,
    subMode: null,
    config: {
        teamSelectionType: null,
        sides: { [TEAMS.RED.ID]: '', [TEAMS.BLUE.ID]: '' },
        whiteJerseyOwner: '',
        stadium: '',
        duration: null
    }
    };

  const [gameState, setGameState] = useState(initialState);

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