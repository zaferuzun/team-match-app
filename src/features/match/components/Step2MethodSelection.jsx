export const Step2MethodSelection = ({ onMethodSelect, onBack }) => (
  <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-3xl shadow-xl border border-gray-50">
    <h2 className="text-2xl font-black mb-8 text-center uppercase tracking-tight text-gray-800">Akış Seçimi</h2>
    <div className="grid gap-4">
      <button 
        onClick={() => onMethodSelect('ready')}
        className="p-6 rounded-2xl border-2 border-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all group text-left"
      >
        <div className="text-xl">Takımım Hazır</div>
        <div className="text-sm opacity-50 font-normal">Kutulara isimleri yerleştirin</div>
      </button>
      <button 
        onClick={() => onMethodSelect('random')}
        className="p-6 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all text-left"
      >
        <div className="text-xl">Random Oluştur</div>
        <div className="text-sm opacity-70 font-normal">Biz rastgele dağıtalım</div>
      </button>
      <button onClick={onBack} className="text-gray-400 mt-4 underline text-sm text-center">Geri Dön</button>
    </div>
  </div>
);