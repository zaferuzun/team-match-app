import { useState } from 'react';

export const useGameConfig = (onComplete) => {
  const [step, setStep] = useState(1);
  const [localConfig, setLocalConfig] = useState({});

  const next = () => setStep(s => s + 1); // Bu fonksiyonun dışarı verilmesi gerekiyor

  const handleTeamSelectType = (type) => {
    const sides = Math.random() > 0.5 ? { red: 'SOL', blue: 'SAĞ' } : { red: 'SAĞ', blue: 'SOL' };
    const jersey = Math.random() > 0.5 ? 'Red' : 'Blue';
    
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
    if (type === 'random') {
      finalDuration = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
    }
    const finalData = { ...localConfig, duration: finalDuration };
    setLocalConfig(finalData);
    onComplete(finalData);
  };

  // BURAYA DİKKAT: 'next' eklendi
  return { step, handleTeamSelectType, handleStadium, handleDuration, localConfig, setStep, next };
};