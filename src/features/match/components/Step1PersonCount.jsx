export const Step1PersonCount = ({ onSelect }) => (
  <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl text-center border border-gray-50">
    <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Kişi Sayısıxx</h2>
    <div className="flex justify-center gap-4">
      {[2, 3, 4].map(num => (
        <button 
          key={num}
          onClick={() => onSelect(num)}
          className="w-16 h-16 rounded-2xl bg-gray-50 text-2xl font-bold hover:bg-black hover:text-white transition-all shadow-sm"
        >
          {num}
        </button>
      ))}
    </div>
  </div>
);