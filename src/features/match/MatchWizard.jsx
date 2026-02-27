import React from 'react';
import { useMatchWizard } from './hooks/useMatchWizard';
import { Step1PersonCount } from './components/Step1PersonCount';
import { Step2MethodSelection } from './components/Step2MethodSelection';
import { Step3InputForm } from './components/Step3InputForm';
import { Step4Arena } from './components/Step4Arena';

export const MatchWizard = () => {
  const wizard = useMatchWizard();

  switch (wizard.step) {
    case 1:
      return <Step1PersonCount onSelect={(num) => { wizard.setPlayerCount(num); wizard.nextStep(); }} />;
    
    case 2:
      return <Step2MethodSelection onMethodSelect={(m) => { wizard.setMethod(m); wizard.nextStep(); }} onBack={wizard.prevStep} />;
    
    case 3:
      return (
        <Step3InputForm 
          method={wizard.method} 
          playerCount={wizard.playerCount} 
          onBack={wizard.prevStep} 
          onConfirmRandom={wizard.generateRandomTeams}
          onConfirmReady={wizard.finalizeTeams}
        />
      );
    
    case 4:
      return <Step4Arena teams={wizard.teams} />;
    
    default:
      return null;
  }
};