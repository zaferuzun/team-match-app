import { TeamManager } from '../features/teams/TeamManager';

export const TeamsPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-6">Oyuncuları Yönet</h1>
    <TeamManager />
  </div>
);