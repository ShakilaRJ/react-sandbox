import React, { useState } from 'react';

interface CardProps {
  name: string;
  role: string;
}

export function TeamCard({ name, role }: CardProps) {
  const [votes, setVotes] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-48 border border-gray-100 text-center">
      <h2 className="text-lg font-bold text-slate-800">{name}</h2>
      <p className="text-slate-500 text-sm font-medium mb-4">{role}</p>
      <button
        onClick={() => setVotes((prev) => prev + 1)}
        className="w-full bg-purple-50 text-purple-600 font-bold py-2 rounded-xl hover:bg-purple-100 transition-colors"
      >
        Vote ({votes})
      </button>
    </div>
  );
}