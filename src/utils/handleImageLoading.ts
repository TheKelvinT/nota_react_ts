import { useState, useEffect } from "react";

const handleImageLoading = (totalImagesCount : number) => {
  const [imageLoadedCount, setImageLoadedCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoadedCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (imageLoadedCount === totalImagesCount) {
      setLoading(false);
    }
  }, [imageLoadedCount, totalImagesCount, setLoading]);

  return { loading, handleImageLoad };
};

export default handleImageLoading;