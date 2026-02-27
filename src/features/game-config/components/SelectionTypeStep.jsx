import React from 'react';

export const SelectionTypeStep = ({ onSelect, onBack }) => (
  <div className="text-center animate-in fade-in zoom-in duration-300">
    <h2 className="text-2xl font-black mb-8 uppercase italic tracking-tighter">Takım Seçimi</h2>
    <div className="grid gap-4">
      <button 
        onClick={() => onSelect('Manuel')} 
        className="p-6 bg-gray-900 text-white rounded-3xl font-bold hover:scale-[1.02] transition-all shadow-lg"
      >
        MANUEL SEÇİM
      </button>
      <button 
        disabled 
        className="p-6 bg-gray-100 text-gray-400 rounded-3xl font-bold cursor-not-allowed opacity-60 border-2 border-dashed border-gray-200"
      >
        RANDOM (SOON)
      </button>
      <button onClick={onBack} className="mt-4 text-gray-400 font-bold underline text-sm">
        Mod Seçimine Dön
      </button>
    </div>
  </div>
);