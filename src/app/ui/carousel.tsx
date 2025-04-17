"use client";

import { ClassCard } from "./card";
import { useRef } from "react";

export type CardData = {
  imageSrc: string;
  title: string;
  type: string;
  cost: string;
  description: string;
  duration: string;
  className?: string;
};

type ClassesCarouselProps = {
  cards: CardData[]; // Принимаем карточки через пропсы
};

export function ClassesCarousel({ cards }: ClassesCarouselProps) {
  const scrollContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="relative group">
      <div
        ref={scrollContainer}
        className="flex gap-2 pb-4 overflow-x-auto overflow-hidden snap-x snap-mandatory h-full w-[1140px]"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="snap-center flex-shrink-1 
              w-[calc(100%-32px)]
              md:w-[calc(50%-16px)]
              xl:w-[calc(33.33%-16px)]
              h-full pr-[13px]"
          >
            <ClassCard {...card} className="h-full flex flex-col mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
