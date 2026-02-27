//step4 alt bileseni
export const TeamResultCard = ({ name, players, color }) => (
  <div className={`p-6 rounded-2xl border-2 text-center shadow-sm ${color === 'red' ? 'bg-red-50 border-red-500' : 'bg-blue-50 border-blue-500'}`}>
    <h3 className={`font-black uppercase mb-3 tracking-[0.2em] ${color === 'red' ? 'text-red-600' : 'text-blue-600'}`}>{name}</h3>
    <div className="flex flex-col gap-1">
      {players.map((p, i) => <span key={i} className="font-bold text-gray-800 text-lg">{p}</span>)}
    </div>
  </div>
);