import { create } from 'zustand';

interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

interface MovieStoreState {
  movies: Movie[];
  toggleWatched: (id: number) => void;
}

export const useMovieStore = create<MovieStoreState>((set) => ({
  movies: [
    { id: 1, title: 'Inception', watched: true },
    { id: 2, title: 'The Matrix', watched: false },
    { id: 3, title: 'Interstellar', watched: false },
    { id: 4, title: 'The Dark Knight', watched: true },
  ],
  toggleWatched: (id) => set((state) => ({
    movies: state.movies.map((movie) =>
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    ),
  })),
}));