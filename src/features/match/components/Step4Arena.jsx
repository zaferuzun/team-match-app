import React from 'react';
import { TeamResultCard } from './TeamResultCard';

export const Step4Arena = ({ teams, onConfirm, onBack }) => {
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl border border-gray-50 text-center">
      <h2 className="text-xl font-black mb-6 uppercase tracking-tight">Takımlar Hazır!</h2>
      
      <div className="space-y-4 mb-8">
        <TeamResultCard name="Red Team" players={teams.red} color="red" />
        <TeamResultCard name="Blue Team" players={teams.blue} color="blue" />
      </div>

      <div className="flex flex-col gap-3">
        <button 
          onClick={() => onConfirm(teams.red, teams.blue)} 
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
        >
          MOD SEÇİMİNE GEÇ ➔
        </button>
        
        <button 
          onClick={onBack} 
          className="w-full py-3 bg-gray-100 text-gray-500 rounded-2xl font-bold hover:bg-gray-200 transition-all"
        >
          GERİ DÖN
        </button>
      </div>
    </div>
  );
};