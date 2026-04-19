import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import type { Magnet } from '../types';

interface WordMagnetProps {
  magnet: Magnet;
}

export function WordMagnet({ magnet }: WordMagnetProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: magnet.id,
  });

  // If on the fridge, use absolute positioning with x/y
  // If in the bank, use relative positioning
  const style: React.CSSProperties =
    magnet.status === 'fridge'
      ? {
          position: 'absolute',
          left: magnet.x,
          top: magnet.y,
          transform: CSS.Translate.toString(transform),
          opacity: isDragging ? 0.5 : 1,
        }
      : {
          position: 'relative',
          transform: CSS.Translate.toString(transform),
          opacity: isDragging ? 0.5 : 1,
        };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-white px-3 py-1 rounded shadow-md font-bold text-sm cursor-grab active:cursor-grabbing inline-block m-1 select-none"
    >
      {magnet.word}
    </div>
  );
}