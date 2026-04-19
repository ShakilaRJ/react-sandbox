import { useDroppable } from '@dnd-kit/core';

interface FridgeDoorProps {
  children: React.ReactNode;
}

export function FridgeDoor({ children }: FridgeDoorProps) {
  const { setNodeRef, isOver } = useDroppable({ id: 'fridge' });

  return (
    <div
      ref={setNodeRef}
      className={`relative flex-1 h-[500px] bg-slate-100 border-4 rounded-2xl transition-colors ${
        isOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}
    >
      {children}
    </div>
  );
}