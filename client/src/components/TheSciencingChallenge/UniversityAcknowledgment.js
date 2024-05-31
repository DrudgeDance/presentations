import React, { useState, useEffect } from 'react';
import { imagePaths } from './UniversityImagePaths.js';

const importImages = async (paths) => {
  const images = await Promise.all(
    paths.map(async (path) => {
      const image = await import(`../../assets/images/${path}`);
      return image.default;
    })
  );
  return images;
};

const UniversityAcknowledgment = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = await importImages(imagePaths);
      setImages(importedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="mt-0 bg-white px-5 flex justify-center">
      <div className="max-w-4xl w-full">
        <h3 className="text-left text-[#9b088c] text-lg mb-2 font-bold">
          The Universities:
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {images.map((src, index) => (
            <div key={index} className="flex items-center justify-center">
              <img src={src} alt={`University ${index + 1}`} className="max-w-[208px] w-full h-auto mb-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityAcknowledgment;