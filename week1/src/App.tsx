import React from 'react';
import { TeamCard } from './components/TeamCard';

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
      <div className="flex gap-4">
        <TeamCard name="Shakila Jayathilaka" role="Full Stack Developer" />
        <TeamCard name="Team Member 2" role="UI Designer" />
        <TeamCard name="Team Member 3" role="Backend Developer" />
      </div>
    </div>
  );
}