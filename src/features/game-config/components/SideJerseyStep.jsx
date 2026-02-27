import React from 'react';

export const SideJerseyStep = ({ config, onNext, onBack }) => (
  <div className="text-center animate-in slide-in-from-right duration-300">
    <h2 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">Taraf ve Forma</h2>
    <div className="space-y-4 mb-8">
      <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100 flex justify-between items-center font-bold">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase">Red Team</span>
          <span className="text-red-600 text-xl font-black">{config.sides?.red}</span>
        </div>
        <div className="text-gray-200 font-light text-2xl">|</div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase">Blue Team</span>
          <span className="text-blue-600 text-xl font-black">{config.sides?.blue}</span>
        </div>
      </div>
      <div className={`p-5 rounded-3xl font-black border-2 transition-all ${config.whiteJerseyOwner === 'Red' ? 'border-red-500 bg-red-50 text-red-600' : 'border-blue-500 bg-blue-50 text-blue-600'}`}>
         ⚪ BEYAZ FORMA HAKKI: <br/> 
         <span className="text-lg">{config.whiteJerseyOwner?.toUpperCase()} TEAM</span>
      </div>
    </div>
    <div className="flex gap-3">
      <button onClick={onBack} className="flex-1 py-4 bg-gray-100 text-gray-500 rounded-2xl font-bold">GERİ</button>
      <button onClick={onNext} className="flex-[2] py-4 bg-black text-white rounded-2xl font-bold shadow-lg">DEVAM ET</button>
    </div>
  </div>
);