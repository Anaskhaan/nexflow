"use client";

import Image from "next/image";

interface CustomCarouselProps {
  images: string[];
}

const CustomCarousel = ({ images }: CustomCarouselProps) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out">
        {images.map((img, index) => (
          <div key={index} className="relative w-full aspect-video flex-shrink-0">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
