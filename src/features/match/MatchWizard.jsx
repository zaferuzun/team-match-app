import React from 'react';
import { useMatchWizard } from './hooks/useMatchWizard';
import { Step1PersonCount } from './components/Step1PersonCount';
import { Step2MethodSelection } from './components/Step2MethodSelection';
import { Step3InputForm } from './components/Step3InputForm';
import { Step4Arena } from './components/Step4Arena';
import { useGame } from '../../context/GameContext';
import { useNavigate } from 'react-router-dom';


export const MatchWizard = ({ onComplete }) => {
  const wizard = useMatchWizard();
  const { saveTeams, gameState } = useGame();
  const navigate = useNavigate();

  // Takımları onaylayıp mod seçimine geçme fonksiyonu
  const handleConfirmTeams = (red, blue) => {
    saveTeams(red, blue);
    navigate('/match/mode'); // Rota değişimi
  };

  switch (wizard.step) {
    case 1:
      return <Step1PersonCount onSelect={(num) => { wizard.handlePlayerCountSelect(num);}} />;
    case 2:
      return <Step2MethodSelection onMethodSelect={(m) => { wizard.setMethod(m); wizard.nextStep(); }} onBack={wizard.prevStep} />;
    case 3:
      return <Step3InputForm method={wizard.method} playerCount={gameState.playerCount} onBack={wizard.prevStep} onConfirmRandom={wizard.generateRandomTeams} onConfirmReady={wizard.finalizeTeams} />;
    case 4:
      return <Step4Arena teams={wizard.teams} onConfirm={(red, blue) => handleConfirmTeams(red, blue)} onBack={wizard.prevStep} />;
    default:
      return null;
  }
};