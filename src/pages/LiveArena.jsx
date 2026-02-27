import React from 'react';
import { useGame } from '../context/GameContext';

export const LiveArena = ({ onReset, onReconfigure }) => { // onReconfigure eklendi
  const { gameState } = useGame();
  const { teams, mainMode, subMode, config } = gameState;

  return (
    <div className="max-w-2xl mx-auto p-8 mt-10 animate-in fade-in zoom-in duration-500">
      
      {/* Üst Bilgi Paneli */}
      <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-100 mb-6 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Stadyum</p>
          <p className="font-bold text-indigo-600 truncate">{config.stadium || 'Arena Merkezi'}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Süre</p>
          <p className="font-bold text-indigo-600">{config.duration} DK</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Beyaz Forma</p>
          <p className={`font-bold ${config.whiteJerseyOwner === 'Red' ? 'text-red-600' : 'text-blue-600'}`}>
            {config.whiteJerseyOwner?.toUpperCase()}
          </p>
        </div>
      </div>

      {/* Maç Kartı */}
      <div className="bg-gray-900 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/10 dashed"></div>
        
        <div className="grid grid-cols-2 gap-10 relative z-10">
          <div className={`${config.sides.red === 'SOL' ? 'order-1' : 'order-2'}`}>
             <h3 className="text-red-500 font-black mb-4 tracking-tighter uppercase italic text-sm">
                RED TEAM <span className="text-[10px] opacity-50">({config.sides.red})</span>
             </h3>
             <div className="space-y-3">
                {teams.red.map((p, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-xl text-white font-bold border border-white/5">{p}</div>
                ))}
             </div>
          </div>

          <div className={`${config.sides.blue === 'SOL' ? 'order-1' : 'order-2'}`}>
             <h3 className="text-blue-500 font-black mb-4 tracking-tighter uppercase italic text-sm">
                BLUE TEAM <span className="text-[10px] opacity-50">({config.sides.blue})</span>
             </h3>
             <div className="space-y-3">
                {teams.blue.map((p, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-xl text-white font-bold border border-white/5">{p}</div>
                ))}
             </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
            <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">{mainMode}</span>
            <h4 className="text-indigo-400 font-bold uppercase italic tracking-widest">{subMode}</h4>
        </div>
      </div>

      {/* Alt Butonlar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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
      
      <p className="text-center text-gray-400 text-[10px] mt-4 uppercase font-bold tracking-widest italic">
        * Mod Değiştir seçeneği mevcut takımları korur.
      </p>
    </div>
  );
};