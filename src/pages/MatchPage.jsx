import { MatchWizard } from '../features/match/MatchWizard';

export const MatchPage = () => (
  <div className="container mx-auto p-4 max-w-md">
    <h1 className="text-2xl font-bold mb-6">Maç Oluştur</h1>
    <MatchWizard />
  </div>
);