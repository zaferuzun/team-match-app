import React, { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { MatchWizard } from './features/match/MatchWizard';
import { MatchSetupWizard } from './features/match-setup/MatchSetupWizard';
import { GameConfigWizard } from './features/game-config/GameConfigWizard';
import { LiveArena } from './pages/LiveArena';

function AppContent() {
  const [currentPage, setCurrentPage] = useState("teams-init");
  const { saveTeams, saveConfig } = useGame();

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* 1. TAKIM KURMA */}
      {currentPage === "teams-init" && (
        <MatchWizard onComplete={(red, blue) => {
          saveTeams(red, blue); 
          setCurrentPage("mode-setup"); 
        }} />
      )}

      {/* 2. MOD SEÇİMİ */}
      {currentPage === "mode-setup" && (
        <MatchSetupWizard 
          onComplete={() => setCurrentPage("game-config")} 
          onBack={() => setCurrentPage("teams-init")} // Geri: Takım kurmaya dön
        />
      )}

      {/* 3. MAÇ ÖNÜ AYARLARI */}
      {currentPage === "game-config" && (
        <GameConfigWizard 
          onComplete={(configData) => {
            saveConfig(configData);
            setCurrentPage("arena"); 
          }} 
          onBack={() => setCurrentPage("mode-setup")} // Geri: Mod seçimine dön
        />
      )}

      {/* 4. FINAL ARENA */}
      {currentPage === "arena" && (
        <LiveArena 
          onReset={() => setCurrentPage("teams-init")} 
          onReconfigure={() => setCurrentPage("mode-setup")}
        />
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