"use client";

import { useRef } from "react";
import {
  CardData1,
  CardData2,
  CardData3,
  CardData4,
  CardData5,
  CardData6,
} from "../constants";
import Card, { CardData } from "./card";

type CarouselType = "Card1" | "Card2" | "Card3" | "Card4" | "Card5" | "Card6";

type CarouselProps = {
  type: CarouselType;
};

export function Carousel({ type }: CarouselProps) {
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
      default:
        return [];
    }
  };

  const getCardWidth = () => {
    switch (type) {
      case "Card1":
        return "w-[360px]";
      case "Card2":
        return "w-[500px]";
      case "Card3":
        return "w-[266px]";
      case "Card4":
        return "w-[368px]";
      case "Card5":
        return "w-[369px]";
      case "Card6":
        return "w-[369px]";
      default:
        return "w-[300px]";
    }
  };

  return (
    <div className="relative group">
      <div
        ref={scrollContainer}
        className="flex gap-4 pb-4 overflow-x-hidden overflow-y-auto snap-x snap-mandatory scrollbar-hide"
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
    </div>
  );
}
