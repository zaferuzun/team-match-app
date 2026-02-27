import React, { createContext, useState, useContext } from 'react';

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Ali" },
    { id: 2, name: "Veli" }
  ]);

  const addPlayer = (name) => {
    setPlayers([...players, { id: Date.now(), name }]);
  };

  const removePlayer = (id) => {
    setPlayers(players.filter(p => p.id !== id));
  };

  return (
    <TeamContext.Provider value={{ players, addPlayer, removePlayer }}>
      {children}
    </TeamContext.Provider>
  );
};

export const useTeam = () => useContext(TeamContext);