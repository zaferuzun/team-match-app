import { useState } from 'react';
import { GAME_CONFIG, TEAMS } from '../../../constants/gameSettings';

export const useGameConfig = (onComplete) => {
  const [step, setStep] = useState(1);
  const [localConfig, setLocalConfig] = useState({});

  const next = () => setStep(s => s + 1); // Bu fonksiyonun dışarı verilmesi gerekiyor

const handleTeamSelectType = (type) => {
    const sides = Math.random() > 0.5 
        ? { [TEAMS.RED.ID]: GAME_CONFIG.SIDES.LEFT, [TEAMS.BLUE.ID]: GAME_CONFIG.SIDES.RIGHT } 
        : { [TEAMS.RED.ID]: GAME_CONFIG.SIDES.RIGHT, [TEAMS.BLUE.ID]: GAME_CONFIG.SIDES.LEFT };
        
    const jersey = Math.random() > 0.5 ? TEAMS.RED.NAME : TEAMS.BLUE.NAME;


    setLocalConfig(prev => ({ 
      ...prev, 
      teamSelectionType: type,
      sides,
      whiteJerseyOwner: jersey
    }));
    next(); // İçeride çalışıyor ama butonda da lazım olacak
  };

  const handleStadium = (stadiumName) => {
    setLocalConfig(prev => ({ ...prev, stadium: stadiumName }));
    next();
  };

  const handleDuration = (type, manualValue = null) => {
    let finalDuration = manualValue;
    if (type === GAME_CONFIG.SELECTION_METHODS.RANDOM.toLowerCase()) {
        finalDuration = Math.floor(Math.random() * (GAME_CONFIG.MAX_DURATION - GAME_CONFIG.MIN_DURATION + 1)) + GAME_CONFIG.MIN_DURATION;
    }
    const finalData = { ...localConfig, duration: finalDuration };
    setLocalConfig(finalData);
    onComplete(finalData);
  };

  // BURAYA DİKKAT: 'next' eklendi
  return { step, handleTeamSelectType, handleStadium, handleDuration, localConfig, setStep, next };
};