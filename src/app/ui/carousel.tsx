"use client";

import { ClassCard } from "./card";
import { useRef } from "react";

export function ClassesCarousel() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const cards = Array(10).fill({
    imageSrc: "/class1.png",
    title: "Йога критического выравнивания",
    type: "группа",
    cost: "от 400",
    description:
      "Йога критического выравнивания (Critical Alignment Yoga) — новая голландская методика восстановления позвоночника. В практике используется ряд опорных приспособлений: планка для снятия напряжения мышц вдоль позвоночника, войлочный валик, бэкбендер и хэдстендер.",
    duration: "1 час 15 минут",
    className: "max-w-[360px]",
  });

  return (
    <div className="relative group">
      {/* Контейнер для прокрутки */}
      <div
        ref={scrollContainer}
        className="flex gap-2 pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory h-full"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 
              w-[calc(100%-32px)]  // Для мобильных
              md:w-[calc(50%-16px)] // Для планшетов
              xl:w-[calc(33.33%-16px)] // Для десктопов
              h-full"
          >
            <ClassCard {...card} className="h-full flex flex-col mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
