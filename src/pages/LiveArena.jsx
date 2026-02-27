import React from 'react';
import { useGame } from '../context/GameContext';

export const LiveArena = ({ onReset }) => {
  const { gameState } = useGame();
  const { teams, mainMode, subMode } = gameState;

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10">
      {/* Oyun Bilgisi Kartı */}
      <div className="bg-indigo-600 p-6 rounded-t-[2.5rem] text-white text-center shadow-lg">
        <p className="text-xs font-black opacity-60 uppercase tracking-widest mb-1">{mainMode}</p>
        <h2 className="text-3xl font-black italic uppercase">{subMode}</h2>
      </div>

      {/* Maç Kartı */}
      <div className="bg-white p-10 rounded-b-[2.5rem] shadow-2xl relative border-t-4 border-dashed border-gray-100">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-indigo-600 w-12 h-12 rounded-full flex items-center justify-center font-black z-20 italic">VS</div>
        
        <div className="grid grid-cols-2 gap-12 text-center items-center">
          <div>
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 shadow-lg shadow-red-200"></div>
            <h3 className="text-red-600 font-black uppercase tracking-widest text-sm mb-2">Red Team</h3>
            <div className="space-y-1">
              {teams.red.map((p, i) => <p key={i} className="font-bold text-gray-800">{p}</p>)}
            </div>
          </div>

          <div>
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 shadow-lg shadow-blue-200"></div>
            <h3 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-2">Blue Team</h3>
            <div className="space-y-1">
              {teams.blue.map((p, i) => <p key={i} className="font-bold text-gray-800">{p}</p>)}
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={onReset}
        className="w-full mt-10 py-4 bg-gray-100 text-gray-400 font-black rounded-2xl hover:bg-black hover:text-white transition-all"
      >
        YENİ MAÇ OLUŞTUR
      </button>
    </div>
  );
};