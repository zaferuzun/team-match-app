import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; // 1. Bunu ekle


export const useMatchWizard = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL'de step varsa onu al, yoksa 1 kabul et
  const initialStep = Number(searchParams.get('step')) || 1;

  const [step, setStep] = useState(initialStep);
  const [playerCount, setPlayerCount] = useState(2);
  const [method, setMethod] = useState(null); 
  const [teams, setTeams] = useState({ red: [], blue: [] });

  // Step her değiştiğinde URL'i güncelle
  const updateStep = (newStep) => {
    setStep(newStep);
    setSearchParams({ step: newStep });
  };

  const nextStep = () => updateStep(step + 1);
  const prevStep = () => updateStep(step - 1);

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

  // Dışarıdan URL değişirse (Geri tuşu gibi) state'i senkronize et
  useEffect(() => {
    const urlStep = Number(searchParams.get('step')) || 1;
    if (urlStep !== step) {
      setStep(urlStep);
    }
  }, [searchParams]);

  return {
    step, playerCount, setPlayerCount,
    method, setMethod,
    teams, nextStep, prevStep,
    generateRandomTeams, finalizeTeams
  };
};