import React, { useState } from 'react';
import { useTeam } from '../../context/TeamContext';

export const TeamManager = () => {
  const [name, setName] = useState("");
  const { players, addPlayer, removePlayer } = useTeam();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    addPlayer(name);
    setName("");
  };

  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Oyuncu Yönetimi</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Oyuncu adı..."
          className="border p-2 flex-1 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">Ekle</button>
      </form>
      <ul className="space-y-2">
        {players.map(p => (
          <li key={p.id} className="flex justify-between border-b pb-1">
            {p.name}
            <button onClick={() => removePlayer(p.id)} className="text-red-500 text-sm">Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};