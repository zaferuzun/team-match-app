import React from 'react';
//step3 alt bileseni
export const RandomInputFields = ({ names, onNameChange }) => {
  return (
    <div className="space-y-3 mb-6">
      <h3 className="font-bold mb-4 uppercase text-gray-400 text-xs text-center tracking-widest italic">
        Oyuncu İsimlerini Girin
      </h3>
      {names.map((name, i) => (
        <input 
          key={i} 
          placeholder={`${i + 1}. Oyuncu`} 
          value={name}
          className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          onChange={(e) => onNameChange(i, e.target.value)} 
        />
      ))}
    </div>
  );
};