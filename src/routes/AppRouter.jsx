import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

// Sayfalar ve Feature'lar
import { MatchWizard } from '../features/match/MatchWizard';
import { MatchSetupWizard } from '../features/match-setup/MatchSetupWizard';
import { GameConfigWizard } from '../features/game-config/GameConfigWizard';
import { LiveArena } from '../pages/LiveArena';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <Routes>
            {/* 
                Grup: /team
            */}
            <Route path="team">
                {/* /team/create  -> NOT: 'path' başına / koymuyoruz çünkü üstte 'team' var */}
                <Route path="create" element={<MatchWizard />} />
                
            
            </Route>

            {/* 
                Grup: /match
            */}
            <Route path="match">
                <Route path="mode" element={<MatchSetupWizard />} />
                <Route path="config" element={<GameConfigWizard />} />
            </Route>

            {/* /arena */}
            <Route path="arena" element={<LiveArena />} />

            {/* 
                ANA YÖNLENDİRMELER
            */}
            {/* Site ana dizinine girilirse direkt /team/create?step=1 */}
            <Route path="/" element={<Navigate to="/team/create?step=1" replace />} />

            {/* 
                404 DURUMU: 
                Eğer hiçbir şey eşleşmezse, step bilgisini kaybetmemek için 
                yine başlangıca ama step=1 ile gönderiyoruz.
            */}
            <Route path="*" element={<Navigate to="/team/create?step=1" replace />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
};