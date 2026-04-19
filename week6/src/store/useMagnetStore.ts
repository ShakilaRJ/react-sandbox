import { create } from 'zustand';
import type { Magnet } from '../types';

interface MagnetStore {
  magnets: Magnet[];
  updateMagnet: (id: string, status: 'bank' | 'fridge', x: number, y: number) => void;
  loadExpansionPack: () => void;
}

const initialMagnets: Magnet[] = [
  { id: '1', word: 'summer', status: 'bank', x: 0, y: 0 },
  { id: '2', word: 'night', status: 'bank', x: 0, y: 0 },
  { id: '3', word: 'is', status: 'bank', x: 0, y: 0 },
  { id: '4', word: 'hot', status: 'bank', x: 0, y: 0 },
  { id: '5', word: 'and', status: 'bank', x: 0, y: 0 },
  { id: '6', word: 'code', status: 'bank', x: 0, y: 0 },
  { id: '7', word: 'bug', status: 'bank', x: 0, y: 0 },
];

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: initialMagnets,

  updateMagnet: (id, status, x, y) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, status, x, y } : m
      ),
    })),

  loadExpansionPack: () =>
    set((state) => {
      const existingIds = state.magnets.map((m) => m.id);
            const newWords = [
                { id: '8', word: 'beautiful', status: 'bank' as const, x: 0, y: 0 },
                { id: '9', word: 'dream', status: 'bank' as const, x: 0, y: 0 },
                { id: '10', word: 'silent', status: 'bank' as const, x: 0, y: 0 },
                { id: '11', word: 'moon', status: 'bank' as const, x: 0, y: 0 },
                { id: '12', word: 'whisper', status: 'bank' as const, x: 0, y: 0 },
            ].filter((w) => !existingIds.includes(w.id));

      return { magnets: [...state.magnets, ...newWords] };
    }),
}));