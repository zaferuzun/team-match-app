import React, { useState } from 'react';
import { TeamProvider } from './context/TeamContext';
import { TeamsPage } from './pages/TeamsPage';
import { MatchPage } from './pages/MatchPage';

function App() {
  const [currentPage, setCurrentPage] = useState("teams");

  return (
    <TeamProvider>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 mb-6 flex justify-center gap-4">
          <button onClick={() => setCurrentPage("teams")} className={`px-4 py-2 ${currentPage === 'teams' ? 'font-bold text-blue-600' : ''}`}>Teams</button>
          <button onClick={() => setCurrentPage("match")} className={`px-4 py-2 ${currentPage === 'match' ? 'font-bold text-blue-600' : ''}`}>Match</button>
        </nav>

        {currentPage === "teams" ? <TeamsPage /> : <MatchPage />}
      </div>
    </TeamProvider>
  );
}

export default App;