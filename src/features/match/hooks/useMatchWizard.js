import { useState } from 'react';

export const useMatchWizard = () => {
  const [step, setStep] = useState(1);
  const [playerCount, setPlayerCount] = useState(2);
  const [method, setMethod] = useState(null); 
  const [teams, setTeams] = useState({ red: [], blue: [] });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  // Random akışı için isimleri karıştırıp dağıtma
  const generateRandomTeams = (names) => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    const red = [];
    const blue = [];
    shuffled.forEach((name, index) => {
      if (index % 2 === 0) red.push(name);
      else blue.push(name);
    });
    setTeams({ red, blue });
    nextStep();
  };

  // Ready akışı için doğrudan gelen listeleri kaydetme
  const finalizeTeams = (redList, blueList) => {
    setTeams({ red: redList, blue: blueList });
    nextStep();
  };

  return {
    step, playerCount, setPlayerCount,
    method, setMethod,
    teams, nextStep, prevStep,
    generateRandomTeams, finalizeTeams
  };
};