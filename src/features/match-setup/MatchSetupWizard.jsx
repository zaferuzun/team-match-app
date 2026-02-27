import React from 'react';
import { useGameSetup } from './hooks/useGameSetup';

export const MatchSetupWizard = ({ onComplete, onBack }) => {
  const { step, selectedMain, modes, handleMainSelect, handleSubSelect, setStep } = useGameSetup();

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-[2.5rem] shadow-2xl border border-gray-50">
      {step === 1 ? (
        <div>
          <h2 className="text-2xl font-black text-center mb-8 uppercase tracking-tighter">Oyun Modu Seç</h2>
          <div className="grid gap-4">
            <button onClick={() => handleMainSelect('Seçimli Maç')} className="p-6 rounded-3xl bg-indigo-600 text-white font-bold text-xl">🎮 Seçimli Maç</button>
            <button onClick={() => handleMainSelect('Normal Maç')} className="p-6 rounded-3xl bg-black text-white font-bold text-xl">⚽ Normal Maç</button>
            <button onClick={onBack} className="mt-2 text-gray-400 font-bold underline text-sm">Vazgeç ve Geri Dön</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-2 mb-6 text-center">
            <button onClick={() => setStep(1)} className="text-gray-400 text-xs font-bold underline">Geri</button>
            <h2 className="text-xl font-black uppercase flex-1">{selectedMain}</h2>
          </div>
          <div className="grid gap-3">
            {modes[selectedMain].map((m) => (
              <button key={m} onClick={() => { handleSubSelect(m); onComplete(); }} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 font-bold text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 transition-all text-left">{m}</button>
            ))}
            <button onClick={() => { handleSubSelect('Random Seç'); onComplete(); }} className="p-4 rounded-2xl bg-orange-50 border-2 border-dashed border-orange-200 text-orange-600 font-black">🎲 RANDOM SEÇ</button>
          </div>
        </div>
      )}
    </div>
  );
};