import React from 'react';
import { GAME_CONFIG } from '../../constants/gameSettings';

export const TeamArenaCard = ({ teamName, players, side, colorClass }) => {
  // Sabitlerden gelen 'SOL' değerine göre order (sıralama) belirliyoruz
  const isLeft = side === GAME_CONFIG.SIDES.LEFT;

  return (
    <div className={`flex flex-col ${isLeft ? 'order-1' : 'order-2'} transition-all duration-500`}>
       <h3 className={`${colorClass} font-black mb-6 tracking-tighter uppercase italic text-sm text-center`}>
          {teamName} 
          <span className="block text-[10px] opacity-40 not-italic mt-1 tracking-widest">
            ({side} TARAF)
          </span>
       </h3>
       
       <div className="space-y-3">
          {players.map((player, index) => (
            <div 
              key={index} 
              className="bg-white/5 p-4 rounded-2xl text-white font-bold border border-white/5 shadow-inner text-center hover:bg-white/10 transition-colors"
            >
              {player}
            </div>
          ))}
       </div>
    </div>
  );
};