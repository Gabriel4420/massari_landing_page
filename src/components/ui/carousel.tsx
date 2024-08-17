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
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return (
    <div className="relative w-full h-full">
      <FlowbiteCarousel
        slide={!currentSlide}
        slideInterval={3000}
        leftControl={
          <ChevronLeftIcon className="w-10 h-10 text-black hover:bg-[#feca19] hover:rounded-full hover:text-white" />
        }
        rightControl={
          <ChevronRightIcon className="w-10 h-10 text-black hover:bg-[#feca19] hover:rounded-full hover:text-white" />
        }
        onSlideChange={setCurrentSlide}
        className="relative lg:h-[500px] h-[600px] w-full"
      >
        {items.map((item, index) => (
          <>
            <div
              className="flex justify-center items-center h-full w-full"
              key={index}
            >
              <Card
                imageUrl={item.image}
                altImageText={item.title}
                title={item.title}
                description={item.description}
              />
            </div>
            
          </>
        ))}
      </FlowbiteCarousel>
      {/* Custom Indicators */}
    </div>
  );
};

export default Carousel;
