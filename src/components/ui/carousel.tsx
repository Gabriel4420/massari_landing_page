"use client";
import React, { useState } from "react";
import { Carousel as FlowbiteCarousel } from "flowbite-react";
import Card from "@/components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface CarouselProps {
  items: {
    image: string;
    title: string;
    description?: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = items.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      <FlowbiteCarousel
        slideInterval={3000}
        indicators={true}
        leftControl={
          <ChevronLeftIcon className="w-10 h-10 text-yellow-500 hover:bg-[#feca19] hover:rounded-full hover:text-white" />
        }
        rightControl={
          <ChevronRightIcon className="w-10 h-10 text-yellow-500 hover:bg-[#feca19] hover:rounded-full hover:text-white" />
        }
        onSlideChange={setCurrentSlide}
        className="relative lg:h-[500px] h-[600px] w-full"
      >
        {items.map((item, index) => (
          <div className="flex justify-center items-center h-full" key={index}>
            <Card
              imageUrl={item.image}
              altImageText={item.title}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </FlowbiteCarousel>
    </div>
  );
};

export default Carousel;
