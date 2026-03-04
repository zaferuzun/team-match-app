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
  const [gameState, setGameState] = useState(() => {
    // 1. Önemli: Anahtarın 'match_arena_v2' olduğundan emin ol
    const saved = localStorage.getItem('match_arena');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("JSON Parse Hatası", e);
      }
    }
    return initialState; // Veri yoksa veya hata varsa başlangıç durumuna dön
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