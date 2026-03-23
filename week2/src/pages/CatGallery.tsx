import { useState, useEffect } from 'react';

export function CatGallery() {
  // This time we store an ARRAY of cats, not just one URL
  const [cats, setCats] = useState([]);

  // Fetch 10 cat images when the page loads
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Cat Gallery</h2>
      {/* Grid: 1 column on small screens, 3 columns on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Loop through each cat and create an image */}
        {cats.map((cat: any) => (
          <img
            key={cat.id}
            src={cat.url}
            alt="Cat"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
        ))}
      </div>
    </div>
  );
}