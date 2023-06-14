"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/image_1.JPG", alt: "Ironman Arizona" },
  { src: "/images/image_2.JPG", alt: "Ironman 70.3 Indian Wells" },
  { src: "/images/image_3.JPG", alt: "2023 SD Rock n' Roll" },
  // Add more image URLs as needed
];

const PhotoCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="carousel">
      <Image
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className="carousel-image"
        width={500}
        height={300}
      />
    </div>
  );
};

export default PhotoCarousel;
