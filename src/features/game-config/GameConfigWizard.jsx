import React, { useState } from 'react';
import { useGameConfig } from './hooks/useGameConfig';

export const GameConfigWizard = ({ onComplete, onBack }) => {
  const { step, handleTeamSelectType, handleStadium, handleDuration, localConfig, setStep, next } = useGameConfig(onComplete);
  const [stadiumInput, setStadiumInput] = useState("");
  const [manualMin, setManualMin] = useState("");

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-[2.5rem] shadow-2xl border border-gray-50">
      
      {/* STEP 1: TEAM SELECTION */}
      {step === 1 && (
        <div className="text-center">
          <h2 className="text-2xl font-black mb-8 uppercase italic">Takım Seçimi</h2>
          <div className="grid gap-4">
            <button onClick={() => handleTeamSelectType('Manuel')} className="p-6 bg-gray-900 text-white rounded-3xl font-bold">MANUEL SEÇİM</button>
            <button disabled className="p-6 bg-gray-100 text-gray-400 rounded-3xl font-bold cursor-not-allowed opacity-60">RANDOM (SOON)</button>
            <button onClick={onBack} className="mt-2 text-gray-400 font-bold underline text-sm">Mod Seçimine Dön</button>
          </div>
        </div>
      )}

      {/* STEP 2: SIDE & JERSEY */}
      {step === 2 && (
        <div className="text-center">
          <h2 className="text-2xl font-black mb-6 uppercase italic">Taraf ve Forma</h2>
          <div className="space-y-4 mb-8">
            <div className="p-5 bg-gray-50 rounded-3xl border flex justify-between font-bold">
              <span>RED: <span className="text-red-600">{localConfig.sides?.red}</span></span>
              <span className="text-gray-200">|</span>
              <span>BLUE: <span className="text-blue-600">{localConfig.sides?.blue}</span></span>
            </div>
            <div className={`p-5 rounded-3xl font-black border-2 ${localConfig.whiteJerseyOwner === 'Red' ? 'border-red-500 bg-red-50 text-red-600' : 'border-blue-500 bg-blue-50 text-blue-600'}`}>
               ⚪ BEYAZ FORMA: {localConfig.whiteJerseyOwner?.toUpperCase()}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setStep(1)} className="flex-1 py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold">GERİ</button>
            <button onClick={next} className="flex-[2] py-4 bg-black text-white rounded-2xl font-bold">DEVAM ET</button>
          </div>
        </div>
      )}

      {/* STEP 3: STADIUM */}
      {step === 3 && (
        <div className="text-center">
          <h2 className="text-2xl font-black mb-8 uppercase italic">Stadyum</h2>
          <div className="grid gap-4">
             <input value={stadiumInput} onChange={(e) => setStadiumInput(e.target.value)} placeholder="Stadyum Adı..." className="p-4 border rounded-2xl text-center font-bold outline-none ring-indigo-500 focus:ring-2" />
             <button disabled={!stadiumInput} onClick={() => handleStadium(stadiumInput)} className={`py-4 rounded-2xl font-bold ${stadiumInput ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400'}`}>ONAYLA</button>
             <button disabled className="py-4 bg-gray-50 text-gray-300 rounded-2xl font-bold border-2 border-dashed cursor-not-allowed">RANDOM (SOON)</button>
             <button onClick={() => setStep(2)} className="mt-2 text-gray-400 font-bold underline text-sm">Geri Dön</button>
          </div>
        </div>
      )}

      {/* STEP 4: DURATION */}
      {step === 4 && (
        <div className="text-center">
          <h2 className="text-2xl font-black mb-8 uppercase italic">Maç Süresi</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <input value={manualMin} onChange={(e) => setManualMin(e.target.value)} type="number" placeholder="Dakika" className="flex-1 p-4 border rounded-2xl text-center font-bold outline-none" />
              <button onClick={() => handleDuration('manual', manualMin)} className="px-6 bg-black text-white rounded-2xl font-bold">OK</button>
            </div>
            <button onClick={() => handleDuration('random')} className="w-full py-5 bg-orange-500 text-white rounded-3xl font-black text-xl shadow-lg shadow-orange-100">🎲 RANDOM (10-15 DK)</button>
            <button onClick={() => setStep(3)} className="w-full py-3 text-gray-400 font-bold underline text-sm">Stadyum Seçimine Dön</button>
          </div>
        </div>
      )}
    </div>
  );
};