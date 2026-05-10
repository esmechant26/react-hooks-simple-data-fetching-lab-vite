import { useState, useEffect } from "react";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function DogImage() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  function fetchRanImage() {
    setLoading(true);
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        return response.json();
      })
      .then((data) => {
        setImage(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchRanImage();
  }, []);

  return (
    <div>
      <p> Dog images! </p>
      {loading ? <p>Loading...</p> : null}
      <img src={image} alt="Random Dog Image" />
      <button onClick={fetchRanImage}>Get New Random Dog Image</button>
    </div>
  );
}
export default DogImage;
