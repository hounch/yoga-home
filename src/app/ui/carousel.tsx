"use client";

import { useState, useRef, useEffect } from "react";
import {
  CardData1,
  CardData2,
  CardData3,
  CardData4,
  CardData5,
  CardData6,
  CardData7,
  CardData8,
} from "../constants";
import Card, { CardData } from "./card";

type CarouselType =
  | "Card1"
  | "Card2"
  | "Card3"
  | "Card4"
  | "Card5"
  | "Card6"
  | "Card7"
  | "Card8";

type CarouselProps = {
  type: CarouselType;
};

export function Carousel({ type }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0); // for active index
  const scrollContainer = useRef<HTMLDivElement>(null);

  const getData = (): CardData[] => {
    switch (type) {
      case "Card1":
        return CardData1;
      case "Card2":
        return CardData2;
      case "Card3":
        return CardData3;
      case "Card4":
        return CardData4;
      case "Card5":
        return CardData5;
      case "Card6":
        return CardData6;
      case "Card7":
        return CardData7;
      case "Card8":
        return CardData8;
      default:
        return [];
    }
  };

  const getCardWidth = () => {
    switch (type) {
      case "Card1":
        return "w-[373px]";
      case "Card2":
        return "w-[90vw] sm:w-[360px]";
      case "Card3":
        return "w-[266px] sm:w-[360px]";
      case "Card4":
        return "w-[266px] sm:w-[360px]";
      case "Card5":
        return "w-[90vw] sm:w-[360px]";
      case "Card6":
        return "w-[90vw] sm:w-[360px]";
      case "Card7":
        return "h-[14.07rem]";
      case "Card8":
        return "h-[18.5rem]";
      default:
        return "w-[90vw] sm:w-[360px]";
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (!container) return;

    const slides = container.querySelectorAll("snap-center");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(slides).indexOf(entry.target);
            setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threeshold: 0.6,
        rootMargin: "0px",
      }
    );
    slides.forEach((slide) => observer.observe(slide));
    return () => slides.forEach((slide) => observer.unobserver(slide));
  }, [getData().length]);

  const scrollToSlide = (index: number) => {
    const container = scrollContainer.current;
    if (!container) return;

    const slides = container.querySelectorAll(".snap-center");
    if (slides[index]) {
      slides[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="relative group px-4">
      <div
        ref={scrollContainer}
        className="flex gap-4 pb-4 overflow-x-auto snap-x scroll-smooth scrollbar-hide"
      >
        {getData().map((item, index) => (
          <div
            key={`${type}-${index}`}
            className={`snap-center flex-shrink-0 ${getCardWidth()}`}
          >
            <Card
              type={type}
              data={{
                ...item,
                className: item.className || "",
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {getData().map((_, index) => {
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />;
        })}
      </div>
    </div>
  );
}
