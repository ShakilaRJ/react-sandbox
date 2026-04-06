import { useState } from 'react';
import { Modal } from './components/Modal';

const CAMPING_GEAR = [
  { id: 1, name: 'Tent', weight: 3500 },
  { id: 2, name: 'Sleeping Bag', weight: 1200 },
  { id: 3, name: 'Camping Stove', weight: 800 }
];

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const totalWeight = CAMPING_GEAR.reduce((sum, item) => sum + item.weight, 0);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Camping Trip Summary</h2>

      <p className="text-xl font-black text-blue-600 mb-4">
        Backpack weight: {totalWeight} g
      </p>

      <button
        onClick={() => setIsOpen(true)}
        className="bg-zinc-800 text-white px-4 py-2 rounded shadow hover:bg-zinc-700"
      >
        View Equipment
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-80">
            <h3 className="text-xl font-bold mb-4">Packed Items</h3>
            <ul className="mb-6 space-y-2">
              {CAMPING_GEAR.map(item => (
                <li key={item.id} className="border-b pb-1 flex justify-between">
                  <span>{item.name}</span>
                  <span className="text-gray-500">{item.weight} g</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-200 text-gray-800 font-bold py-2 rounded hover:bg-gray-300"
            >
              Close Window
            </button>
          </div>
        </div>
      )}

      {/* Part 2: Reusable Modal component */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Modal Testing</h2>

      <div className="flex gap-3">
        <button
          onClick={() => setShowInfo(true)}
          className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Show Details
        </button>
        <button
          onClick={() => setShowSecond(true)}
          className="bg-green-700 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Show Details
        </button>
      </div>

      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <p>This is content injected inside the modal!</p>
      </Modal>

      <Modal isOpen={showSecond} onClose={() => setShowSecond(false)}>
        <h3 className="text-xl font-bold text-orange-500 mb-2">Second popup with same Modal component!!!</h3>
        <p className="text-gray-600">Content changes but the Modal is the same!</p>
      </Modal>
    </div>
  );
}