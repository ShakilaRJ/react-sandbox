import { useState } from 'react';
import { useMovieStore } from '../store/useMovieStore';

export function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);
  const [filterType, setFilterType] = useState<'all' | 'watched' | 'unwatched'>('all');

  let filteredMovies = movies;
  if (filterType === 'watched') {
    filteredMovies = movies.filter(m => m.watched);
  } else if (filterType === 'unwatched') {
    filteredMovies = movies.filter(m => !m.watched);
  }

  return (
    <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Movie Library</h2>

      <div className="flex gap-2 mb-6">
        <button onClick={() => setFilterType('all')} className={`px-3 py-1 rounded border ${filterType === 'all' ? 'bg-zinc-800 text-white' : 'bg-white'}`}>All Movies</button>
        <button onClick={() => setFilterType('watched')} className={`px-3 py-1 rounded border ${filterType === 'watched' ? 'bg-zinc-800 text-white' : 'bg-white'}`}>Watched</button>
        <button onClick={() => setFilterType('unwatched')} className={`px-3 py-1 rounded border ${filterType === 'unwatched' ? 'bg-zinc-800 text-white' : 'bg-white'}`}>Unwatched</button>
      </div>

      {filteredMovies.map((movie) => (
        <div key={movie.id} className="flex items-center gap-3 mb-3">
          <span className="text-lg">
            {movie.watched ? '✅' : '🍿'} {movie.title}
          </span>
          <span className="text-sm text-gray-500">
            {movie.watched ? 'Watched' : 'Unwatched'}
          </span>
          <button
            onClick={() => toggleWatched(movie.id)}
            className="px-3 py-1 bg-gray-200 rounded font-bold hover:bg-gray-300 transition-colors"
          >
            Change state
          </button>
        </div>
      ))}
    </div>
  );
}