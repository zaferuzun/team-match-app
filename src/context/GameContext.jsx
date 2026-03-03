import React, { createContext, useState, useContext } from 'react';
import { TEAMS } from '../constants/gameSettings';
import { useEffect } from 'react';

const GameContext = createContext();

// Başlangıç değerlerimizi dışarıda tanımlıyoruz (Temiz kod için)
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

export const GameProvider = ({ children }) => {
  // 1. ADIM: Başlangıçta LocalStorage kontrolü (Lazy Initializer)
  const [gameState, setGameState] = useState(() => {
    try {
      const savedData = localStorage.getItem('match_arena_v2');
      // Eğer veri varsa Parse et, yoksa initialState kullan
      return savedData ? JSON.parse(savedData) : initialState;
    } catch (error) {
      console.error("LocalStorage okunurken hata oluştu:", error);
      return initialState;
    }
  });

  // 2. ADIM: Her State değişiminde LocalStorage'ı güncelle
  useEffect(() => {
    localStorage.setItem('match_arena', JSON.stringify(gameState));
  }, [gameState]);

  const saveTeams = (red, blue) => {
    setGameState(prev => ({ ...prev, teams: { red, blue } }));
  };

  const setModes = (main, sub) => {
    setGameState(prev => ({ ...prev, mainMode: main, subMode: sub }));
  };

  const saveConfig = (newConfig) => {
    setGameState(prev => ({ ...prev, config: { ...prev.config, ...newConfig } }));
  };

  // 3. ADIM: Tamamen Sıfırlama Fonksiyonu (Yeni Maç İçin)
  const resetAll = () => {
    localStorage.removeItem('match_arena');
    setGameState(initialState);
  };

  return (
    <GameContext.Provider value={{ gameState, saveTeams, setModes, saveConfig, resetAll }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);