import React, { createContext, useState, useContext } from 'react';
import { TEAMS } from '../constants/gameSettings';
import { useEffect } from 'react';

const GameContext = createContext();

// Başlangıç değerlerimizi dışarıda tanımlıyoruz (Temiz kod için)
const initialState = {
  teams: { [TEAMS.RED.ID]: [], [TEAMS.BLUE.ID]: [] },
  mainMode: null,
  playerCount: 2,
  subMode: null,
  tempData: {
    randomNames: ["", "", "", ""], 
    readyNames: { red: [""], blue: [""] }
  },
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

const setGlobalPlayerCount = (count) => {
  setGameState(prev => {
    // Yeni sayıya göre temiz bir randomNames dizisi oluştur (Örn: 2 ise ["", ""])
    const newRandomNames = Array(count).fill("");
    
    // ReadyNames için başlangıç (Her takıma en az 1 tane)
    let newReadyNames = { red: [""], blue: [""] };
    
    // Eğer 4 kişi seçildiyse otomatik 2-2 başlat
    if (count === 4) {
      newReadyNames = { red: ["", ""], blue: ["", ""] };
    }

    return {
      ...prev,
      playerCount: count,
      tempData: {
        ...prev.tempData,
        randomNames: newRandomNames,
        readyNames: newReadyNames
      }
    };
  });
};

    // YENİ: Geçici isimleri kaydetme
  const updateTempData = (key, value) => {
    setGameState(prev => ({
      ...prev,
      tempData: { ...prev.tempData, [key]: value }
    }));
  }

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
    <GameContext.Provider value={{ gameState, saveTeams, setModes, saveConfig, resetAll, updateTempData,setGlobalPlayerCount }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);