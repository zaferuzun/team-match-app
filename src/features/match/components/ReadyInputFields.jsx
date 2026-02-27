import React from 'react';
//step3 alt bileseni
export const ReadyInputFields = ({ red, blue, playerCount, onUpdateName, onAddInput }) => {
  const currentTotal = red.length + blue.length;

  return (
    <div className="space-y-6">
      <h3 className="text-center font-bold text-gray-400 text-xs uppercase tracking-widest">
        Takımları Yerleştir ({currentTotal}/{playerCount})
      </h3>

      {/* RED TEAM SECTION */}
      <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
        <div className="flex justify-between items-center mb-3">
          <label className="text-xs font-black text-red-600 uppercase">Red Team</label>
          {currentTotal < playerCount && (
            <button 
              onClick={() => onAddInput('red')} 
              className="text-[10px] bg-white text-red-700 px-3 py-1 rounded-full font-bold shadow-sm hover:bg-red-100 transition-colors"
            >
              + Ekle
            </button>
          )}
        </div>
        <div className="space-y-2">
          {red.map((name, i) => (
            <input 
              key={i} 
              value={name} 
              placeholder="İsim..." 
              className="w-full p-3 rounded-xl border-none text-sm outline-none focus:ring-2 focus:ring-red-300"
              onChange={(e) => onUpdateName('red', i, e.target.value)} 
            />
          ))}
        </div>
      </div>

      {/* BLUE TEAM SECTION */}
      <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
        <div className="flex justify-between items-center mb-3">
          <label className="text-xs font-black text-blue-600 uppercase">Blue Team</label>
          {currentTotal < playerCount && (
            <button 
              onClick={() => onAddInput('blue')} 
              className="text-[10px] bg-white text-blue-700 px-3 py-1 rounded-full font-bold shadow-sm hover:bg-blue-100 transition-colors"
            >
              + Ekle
            </button>
          )}
        </div>
        <div className="space-y-2">
          {blue.map((name, i) => (
            <input 
              key={i} 
              value={name} 
              placeholder="İsim..." 
              className="w-full p-3 rounded-xl border-none text-sm outline-none focus:ring-2 focus:ring-blue-300"
              onChange={(e) => onUpdateName('blue', i, e.target.value)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};