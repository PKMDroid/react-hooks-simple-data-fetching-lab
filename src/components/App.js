// create your App component here
import React, { useState, useEffect } from 'react';

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(DOG_API_URL)
      .then(response => response.json())
      .then(data => {
        setDogImageUrl(data.message);
      })
      .catch(error => {
        console.error("Failed to fetch dog image:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        dogImageUrl && (
          <img src={dogImageUrl}alt="A Random Dog"/>
        )
      )}
    </div>
  );
}

export default App;
