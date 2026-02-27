import React, { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { MatchWizard } from './features/match/MatchWizard';
import { MatchSetupWizard } from './features/match-setup/MatchSetupWizard';
import { LiveArena } from './pages/LiveArena';

function AppContent() {
  const [currentPage, setCurrentPage] = useState("teams-init");
  const { saveTeams } = useGame();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* 1. AŞAMA: Takım Kurma */}
      {currentPage === "teams-init" && (
        <MatchWizard onComplete={(red, blue) => {
          saveTeams(red, blue); 
          setCurrentPage("mode-setup"); // Sayfa değişimi burada gerçekleşir
        }} />
      )}

      {/* 2. AŞAMA: Mod Seçimi */}
      {currentPage === "mode-setup" && (
        <MatchSetupWizard onComplete={() => {
          setCurrentPage("arena"); 
        }} />
      )}

      {/* 3. AŞAMA: Final Arena */}
      {currentPage === "arena" && (
        <LiveArena onReset={() => setCurrentPage("teams-init")} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}