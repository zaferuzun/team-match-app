import React, { useState, useEffect } from 'react';
import { RandomInputFields } from './RandomInputFields';
import { ReadyInputFields } from './ReadyInputFields';
import { useMatchWizard } from '../hooks/useMatchWizard';

export const Step3InputForm = ({ method, playerCount, onBack, onConfirmRandom, onConfirmReady }) => {
  const { tempData, handleTempNameChange } = useMatchWizard();

  // 1. ADIM: State'leri Context'teki (tempData) verilerle başlatıyoruz.
  // Eğer Context boşsa playerCount kadar boş dizi oluşturuyoruz.
  const [names, setNames] = useState(tempData.randomNames);
  const [red, setRed] = useState(tempData.readyNames.red);
  const [blue, setBlue] = useState(tempData.readyNames.blue);

  // 2. ADIM: 4 Kişi seçildiğinde 2-2 ayarı (Sadece ilk girişte)
  useEffect(() => {
    setNames(tempData.randomNames);
    setRed(tempData.readyNames.red);
    setBlue(tempData.readyNames.blue);
  }, [playerCount, tempData.randomNames, tempData.readyNames]);

  // --- RANDOM MODU İŞLEMLERİ ---
  const handleRandomChange = (index, val) => {
    const next = [...names];
    next[index] = val;
    setNames(next); // Yerel state güncelle (Anlık yazı için)
    handleTempNameChange('randomNames', next); // Context güncelle (Kalıcılık için)
  };

  // --- READY MODU İŞLEMLERİ ---
  const handleReadyNameUpdate = (team, index, val) => {
    if (team === 'red') {
      const nextRed = [...red];
      nextRed[index] = val;
      setRed(nextRed);
      handleTempNameChange('readyNames', { red: nextRed, blue });
    } else {
      const nextBlue = [...blue];
      nextBlue[index] = val;
      setBlue(nextBlue);
      handleTempNameChange('readyNames', { red, blue: nextBlue });
    }
  };

  const handleAddReadyInput = (team) => {
    if (red.length + blue.length < playerCount) {
      if (team === 'red') {
        const nextRed = [...red, ""];
        setRed(nextRed);
        handleTempNameChange('readyNames', { red: nextRed, blue });
      } else {
        const nextBlue = [...blue, ""];
        setBlue(nextBlue);
        handleTempNameChange('readyNames', { red, blue: nextBlue });
      }
    }
  };

  // Validasyonlar
  const isRandomValid = names.every(n => n.trim() !== "");
  const isReadyValid = (red.length + blue.length) === playerCount && [...red, ...blue].every(n => n.trim() !== "");

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl border border-gray-50">
      {method === 'random' ? (
        <RandomInputFields 
          names={names} 
          onNameChange={handleRandomChange} 
        />
      ) : (
        <ReadyInputFields 
          red={red} 
          blue={blue} 
          playerCount={playerCount} 
          onUpdateName={handleReadyNameUpdate} 
          onAddInput={handleAddReadyInput} 
        />
      )}

      <div className="flex gap-3 mt-6">
        <button 
          onClick={onBack} 
          className="flex-1 p-4 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
        >
          Geri
        </button>
        <button 
          disabled={method === 'random' ? !isRandomValid : !isReadyValid}
          onClick={() => method === 'random' ? onConfirmRandom(names) : onConfirmReady(red, blue)} 
          className={`flex-1 p-4 rounded-2xl font-bold text-white transition-all 
            ${(method === 'random' ? isRandomValid : isReadyValid) 
              ? 'bg-indigo-600 shadow-lg shadow-indigo-100' 
              : 'bg-gray-200 cursor-not-allowed'}`}
        >
          {method === 'random' ? 'Karıştır' : 'Tamamla'}
        </button>
      </div>
    </div>
  );
};