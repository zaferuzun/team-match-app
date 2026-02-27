import React, { useState } from 'react';

export const DurationStep = ({ onConfirm, onBack }) => {
  const [manualMin, setManualMin] = useState("");

  return (
    <div className="text-center animate-in slide-in-from-right duration-300">
      <h2 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Maç Süresi</h2>
      <div className="space-y-4">
        <div className="flex gap-2">
          <input 
            value={manualMin} 
            onChange={(e) => setManualMin(e.target.value)} 
            type="number" 
            placeholder="Dakika" 
            className="flex-1 p-4 bg-gray-50 rounded-2xl text-center font-bold outline-none border-none shadow-inner" 
          />
          <button 
            disabled={!manualMin}
            onClick={() => onConfirm('manual', manualMin)} 
            className={`px-6 rounded-2xl font-bold transition-all ${manualMin ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-300'}`}
          >
            OK
          </button>
        </div>
        <div className="relative py-2 flex items-center justify-center">
            <div className="w-full border-t border-gray-100 absolute"></div>
            <span className="relative bg-white px-4 text-gray-300 text-[10px] font-black uppercase">Veya</span>
        </div>
        <button 
          onClick={() => onConfirm('random')} 
          className="w-full py-5 bg-orange-500 text-white rounded-3xl font-black text-xl shadow-lg shadow-orange-100 hover:scale-[1.02] transition-all"
        >
          🎲 RANDOM SÜRE (10-15 DK)
        </button>
        <button onClick={onBack} className="w-full py-3 text-gray-400 font-bold underline text-sm">Geri Dön</button>
      </div>
    </div>
  );
};