import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "UI/UX Designer",
  "Full Stack Developer",
];

function CategoryCarousel() {
  return (
    <div className="my-20">
      <Carousel className="w-full max-w-2xl mx-auto relative ">
        <CarouselContent>
          {categories.map((cat, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-center p-5 transition-transform duration-300 transform hover:scale-105"
            >
              <Button
                variant="outline"
                className="rounded-full border-2 border-[#6A38C2] text-[#6A38C2] hover:bg-[#6A38C2] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 flex justify-between items-center">
          <CarouselPrevious className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-all duration-300">
            <span className="text-[#6A38C2] text-lg">{"<"}</span>
          </CarouselPrevious>
          <CarouselNext className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-all duration-300">
            <span className="text-[#6A38C2] text-lg">{">"}</span>
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
