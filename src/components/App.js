import React, { useState, useEffect } from "react";

function App() {
  const [dogImageUrl, setdogImageUrl] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setdogImageUrl(data);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;
  return <img alt="A Random Dog" src={dogImageUrl.message}></img>;
}

export default App;