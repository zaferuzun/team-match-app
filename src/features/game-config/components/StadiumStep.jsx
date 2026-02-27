import React, { useState } from 'react';

export const StadiumStep = ({ onConfirm, onBack }) => {
  const [stadium, setStadium] = useState("");

  return (
    <div className="text-center animate-in slide-in-from-right duration-300">
      <h2 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Stadyum Seçimi</h2>
      <div className="grid gap-4">
         <input 
            value={stadium}
            onChange={(e) => setStadium(e.target.value)}
            placeholder="Stadyum Adı Girin..." 
            className="p-4 bg-gray-50 border-none rounded-2xl text-center font-bold outline-none focus:ring-2 ring-indigo-500 transition-all shadow-inner" 
         />
         <button 
            disabled={!stadium}
            onClick={() => onConfirm(stadium)} 
            className={`py-4 rounded-2xl font-bold transition-all ${stadium ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-gray-100 text-gray-400'}`}
         >
            ONAYLA
         </button>
         <button disabled className="py-4 border-2 border-dashed border-gray-100 text-gray-300 rounded-2xl font-bold cursor-not-allowed text-xs">
            RANDOM STADYUM (SOON)
         </button>
         <button onClick={onBack} className="mt-2 text-gray-400 font-bold underline text-sm">Geri Dön</button>
      </div>
    </div>
  );
};