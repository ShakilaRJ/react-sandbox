import { DndContext } from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { useMagnetStore } from './store/useMagnetStore';
import { WordMagnet } from './components/WordMagnet';
import { FridgeDoor } from './components/FridgeDoor';

export default function App() {
  const { magnets, updateMagnet, loadExpansionPack } = useMagnetStore();

  const handleDragEnd = (event: DragEndEvent) => {
    const magnetId = event.active.id as string;
    const magnet = magnets.find((m) => m.id === magnetId);
    if (!magnet) return;

    // If dropped on the fridge
    if (event.over && event.over.id === 'fridge') {
      const activeRect = event.active.rect.current.translated;
      const overRect = event.over.rect;

      if (activeRect && overRect) {
        // Calculate position relative to the fridge
        const x = activeRect.left - overRect.left;
        const y = activeRect.top - overRect.top;
        updateMagnet(magnetId, 'fridge', x, y);
      }
    } else if (magnet.status === 'fridge') {
      // If dragged inside the fridge but not dropped on it (moving within fridge)
      const newX = magnet.x + (event.delta?.x || 0);
      const newY = magnet.y + (event.delta?.y || 0);
      updateMagnet(magnetId, 'fridge', newX, newY);
    }
  };

  const bankMagnets = magnets.filter((m) => m.status === 'bank');
  const fridgeMagnets = magnets.filter((m) => m.status === 'fridge');

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-8 min-h-screen bg-slate-50 font-sans">
        {/* Header */}
        <div className="bg-white p-6 mb-6 rounded-2xl flex justify-between items-center shadow print:hidden">
          <div>
            <h1 className="text-xl font-bold text-blue-600">Fridge poetry</h1>
            <p className="text-xs text-gray-500">Drag words to fridge door and locate them freely.</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={loadExpansionPack}
              className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold"
            >
              Load extra words 📦
            </button>
            <button
              onClick={() => window.print()}
              className="bg-zinc-800 text-white px-4 py-2 rounded-lg font-bold"
            >
              Print the poem 🖨
            </button>
          </div>
        </div>

        {/* Main area */}
        <div className="flex gap-6">
          {/* Word Bank (hidden on print) */}
          <div className="w-64 bg-zinc-800 p-4 rounded-2xl print:hidden">
            <h2 className="text-white text-xs font-bold mb-3 tracking-wider">WORD BANK</h2>
            <div className="flex flex-wrap">
              {bankMagnets.map((magnet) => (
                <WordMagnet key={magnet.id} magnet={magnet} />
              ))}
            </div>
          </div>

          {/* Fridge Door */}
          <FridgeDoor>
            {fridgeMagnets.map((magnet) => (
              <WordMagnet key={magnet.id} magnet={magnet} />
            ))}
          </FridgeDoor>
        </div>
      </div>
    </DndContext>
  );
}