"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="relative flex items-center justify-center">
      <button
        onClick={handlePrev}
        className="absolute left-0 p-2 bg-gray-200 rounded-full"
      >
        <ChevronDoubleLeftIcon className="w-6 h-6 text-gray-800" />
      </button>
      <Image
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        width={800}
        height={600}
        className="rounded-lg"
      />
      <button
        onClick={handleNext}
        className="absolute right-0 p-2 bg-gray-200 rounded-full"
      >
        <ChevronDoubleRightIcon className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default Carousel;
