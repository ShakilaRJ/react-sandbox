import { useState, useEffect } from 'react';

export function DogGallery() {
  // State to store the dog image URL — starts empty
  const [dogUrl, setDogUrl] = useState('');

  // useEffect runs ONCE when this page loads (because of [])
  // It fetches a random dog image from the internet
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setDogUrl(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Random Dog</h2>
      {/* If dogUrl exists, show the image. Otherwise show "Loading..." */}
      {dogUrl ? (
        <img src={dogUrl} alt="Dog" className="rounded-xl shadow-lg w-64 h-64 object-cover" />
      ) : (
        <p>Loading dog...</p>
      )}
    </div>
  );
}