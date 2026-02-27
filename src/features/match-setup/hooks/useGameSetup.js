import { useState } from 'react';
import { useGame } from '../../../context/GameContext';

export const useGameSetup = () => {
  const { setModes } = useGame();
  const [step, setStep] = useState(1); // 1: Main Mode, 2: Sub Mode
  const [selectedMain, setSelectedMain] = useState(null);

  const modes = {
    'Seçimli Maç': [
      'Her ligden bir takım', 
      'İngiltere Karma', 
      'Karşılıklı Serbest Seçim', 
      'Karşılıklı Yasaklı', 
      'Aynı Ligden Alma Seçim'
    ],
    'Normal Maç': [
      'Derbi', 
      'Aynı Ligden Alma', 
      'İngiltere Liginden Seçim'
    ]
  };

  const handleMainSelect = (mode) => {
    setSelectedMain(mode);
    setStep(2);
  };

  const handleSubSelect = (sub) => {
    let finalSub = sub;
    if (sub === 'Random Seç') {
      const options = modes[selectedMain];
      finalSub = options[Math.floor(Math.random() * options.length)];
    }
    setModes(selectedMain, finalSub);
    // Burada Arena'ya veya Maç Sayfasına yönlendirme tetiklenecek
  };

  return {
    step,
    selectedMain,
    modes,
    handleMainSelect,
    handleSubSelect,
    setStep
  };
};