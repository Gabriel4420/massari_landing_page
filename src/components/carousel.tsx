"use client";
import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images?: string[];
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images!.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images!.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={images![currentIndex]}
        alt="Carrossel"
        className="w-full h-full object-contain cursor-pointer"
        onClick={openModal}
      />
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <img
            src={images![currentIndex]}
            alt="Zoomed"
            className="max-w-full max-h-full h-[500px] w-full object-contain"
            onClick={closeModal}
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
