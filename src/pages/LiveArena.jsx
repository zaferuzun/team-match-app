import React from 'react';
import { useGame } from '../context/GameContext';
import { TEAMS, GAME_CONFIG } from '../constants/gameSettings';
import { TeamArenaCard } from './components/TeamArenaCard';

export const LiveArena = ({ onReset, onReconfigure }) => {
  const { gameState } = useGame();
  const { teams, mainMode, subMode, config } = gameState;

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 animate-in fade-in zoom-in duration-500">
      
      {/* Üst Bilgi Paneli */}
      <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-100 mb-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Stadyum</p>
          <p className="font-bold text-indigo-600 truncate">
            {config.stadium || GAME_CONFIG.DEFAULT_STADIUM}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Süre</p>
          <p className="font-bold text-indigo-600">{config.duration} DK</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Beyaz Forma</p>
          <p className={`font-bold ${config.whiteJerseyOwner === TEAMS.RED.NAME ? 'text-red-600' : 'text-blue-600'}`}>
            {config.whiteJerseyOwner?.toUpperCase()}
          </p>
        </div>
      </div>

      {/* Maç Kartı (Arena) */}
      <div className="bg-gray-900 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden border-4 border-white/5">
        {/* Saha Ortası Çizgisi */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        
        <div className="grid grid-cols-2 gap-12 relative z-10">
          {/* RED TEAM SECTION */}
          <TeamArenaCard 
            teamName={TEAMS.RED.NAME}
            players={teams[TEAMS.RED.ID]}
            side={config.sides[TEAMS.RED.ID]}
            colorClass={TEAMS.RED.COLOR}
          />

          {/* BLUE TEAM SECTION */}
          <TeamArenaCard 
            teamName={TEAMS.BLUE.NAME}
            players={teams[TEAMS.BLUE.ID]}
            side={config.sides[TEAMS.BLUE.ID]}
            colorClass={TEAMS.BLUE.COLOR}
          />
        </div>

        {/* Mod Bilgisi */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">{mainMode}</span>
            <h4 className="text-indigo-400 font-black uppercase italic tracking-widest mt-1 text-lg">{subMode}</h4>
        </div>
      </div>

      {/* Alt Kontroller */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <button 
          onClick={onReconfigure} 
          className="py-5 bg-indigo-600 text-white rounded-[2rem] font-black hover:bg-indigo-700 transition-all uppercase tracking-widest shadow-lg active:scale-95"
        >
          🔄 Mod Değiştir
        </button>
        <button 
          onClick={onReset} 
          className="py-5 bg-white border-2 border-black rounded-[2rem] font-black hover:bg-black hover:text-white transition-all uppercase tracking-widest shadow-sm active:scale-95"
        >
          🗑️ Yeni Maç
        </button>
      </div>
    </div>
  );
};