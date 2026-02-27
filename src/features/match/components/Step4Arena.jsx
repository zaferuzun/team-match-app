import { TeamResultCard } from './TeamResultCard';

export const Step4Arena = ({ teams }) => (
  <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl">
    <div className="text-center mb-8">
      <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-black tracking-[0.3em] uppercase">Match Ready</span>
      <h2 className="text-4xl font-black italic mt-2 text-gray-900">ARENA</h2>
    </div>
    <div className="space-y-4 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-black text-black w-10 h-10 flex items-center justify-center rounded-full font-black z-10 italic">VS</div>
      <TeamResultCard name="Red Team" players={teams.red} color="red" />
      <TeamResultCard name="Blue Team" players={teams.blue} color="blue" />
    </div>
    <button onClick={() => window.location.reload()} className="w-full mt-10 py-4 bg-gray-100 text-gray-400 rounded-2xl font-black hover:bg-black hover:text-white transition-all uppercase tracking-widest">Sıfırla</button>
  </div>
);