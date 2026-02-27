import React, { useState, useEffect } from 'react';
import { RandomInputFields } from './RandomInputFields';
import { ReadyInputFields } from './ReadyInputFields';

export const Step3InputForm = ({ method, playerCount, onBack, onConfirmRandom, onConfirmReady }) => {
  // Random Akışı State'i
  const [names, setNames] = useState(Array(playerCount).fill(""));
  
  // Ready Akışı State'i
  const [red, setRed] = useState([""]);
  const [blue, setBlue] = useState([""]);

  // 4 Kişi seçildiyse başlangıçta 2-2 ayarla
  useEffect(() => {
    if (method === 'ready' && playerCount === 4) {
      setRed(["", ""]);
      setBlue(["", ""]);
    }
  }, [method, playerCount]);

  // Yardımcı Fonksiyonlar
  const handleRandomNameChange = (index, val) => {
    const next = [...names];
    next[index] = val;
    setNames(next);
  };

  const handleReadyNameUpdate = (team, index, val) => {
    if (team === 'red') {
      const next = [...red]; next[index] = val; setRed(next);
    } else {
      const next = [...blue]; next[index] = val; setBlue(next);
    }
  };

  const handleAddReadyInput = (team) => {
    if (red.length + blue.length < playerCount) {
      if (team === 'red') setRed([...red, ""]);
      else setBlue([...blue, ""]);
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
          onNameChange={handleRandomNameChange} 
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