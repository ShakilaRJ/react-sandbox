import React, { useState } from 'react';

interface ProfileProps {
  name: string;
  role: string;
}

export function Profile({ name, role }: ProfileProps) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm border border-gray-100 text-center">
      <h2 className="text-2xl font-bold text-slate-800">{name}</h2>
      <p className="text-slate-500 font-medium mb-6">{role}</p>
      <button
        onClick={() => setLikes((prev) => prev + 1)}
        className="w-full bg-blue-50 text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-100 flex justify-center gap-2 transition-colors"
      >
        <span>Like</span>
        <span>❤️ {likes}</span>
      </button>
    </div>
  );
}