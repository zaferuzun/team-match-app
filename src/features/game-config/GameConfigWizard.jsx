import React from 'react';
import { useGameConfig } from './hooks/useGameConfig';
import { SelectionTypeStep } from './components/SelectionTypeStep';
import { SideJerseyStep } from './components/SideJerseyStep';
import { StadiumStep } from './components/StadiumStep';
import { DurationStep } from './components/DurationStep';

export const GameConfigWizard = ({ onComplete, onBack }) => {
  const { step, handleTeamSelectType, handleStadium, handleDuration, localConfig, setStep, next } = useGameConfig(onComplete);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SelectionTypeStep onSelect={handleTeamSelectType} onBack={onBack} />;
      
      case 2:
        return <SideJerseyStep config={localConfig} onNext={next} onBack={() => setStep(1)} />;
      
      case 3:
        return <StadiumStep onConfirm={handleStadium} onBack={() => setStep(2)} />;
      
      case 4:
        return <DurationStep onConfirm={handleDuration} onBack={() => setStep(3)} />;
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-[2.5rem] shadow-2xl border border-gray-50">
      {renderStep()}
    </div>
  );
};