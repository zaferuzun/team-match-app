import React, { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { MatchWizard } from './features/match/MatchWizard';
import { MatchSetupWizard } from './features/match-setup/MatchSetupWizard';
import { GameConfigWizard } from './features/game-config/GameConfigWizard';
import { LiveArena } from './pages/LiveArena';
import { PAGES } from './constants/gameSettings';

function AppContent() {
  const [currentPage, setCurrentPage] = useState(PAGES.TEAMS_INIT);
  const { saveTeams, saveConfig } = useGame();

  // MERKEZİ NAVİGASYON YÖNETİMİ
  const renderPage = () => {
    switch (currentPage) {
      case PAGES.TEAMS_INIT:
        return (
          <MatchWizard 
            onComplete={(red, blue) => {
              saveTeams(red, blue);
              setCurrentPage(PAGES.MODE_SETUP);
            }} 
          />
        );

      case PAGES.MODE_SETUP:
        return (
          <MatchSetupWizard 
            onComplete={() => setCurrentPage(PAGES.GAME_CONFIG)} 
            onBack={() => setCurrentPage(PAGES.TEAMS_INIT)} 
          />
        );

      case PAGES.GAME_CONFIG:
        return (
          <GameConfigWizard 
            onComplete={(configData) => {
              saveConfig(configData);
              setCurrentPage(PAGES.ARENA);
            }} 
            onBack={() => setCurrentPage(PAGES.MODE_SETUP)} 
          />
        );

      case PAGES.ARENA:
        return (
          <LiveArena 
            onReset={() => setCurrentPage(PAGES.TEAMS_INIT)} 
            onReconfigure={() => setCurrentPage(PAGES.MODE_SETUP)} 
          />
        );

      default:
        return <MatchWizard onComplete={() => setCurrentPage(PAGES.MODE_SETUP)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 flex flex-col items-center justify-center p-4">
      {/* Sadece ilgili sayfayı render eder */}
      {renderPage()}
      
      {/* İleride buraya sabit bir Footer veya Navbar da ekleyebilirsin */}
    </div>
  );
}

// Uygulamanın en dış sarmalayıcısı
export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}