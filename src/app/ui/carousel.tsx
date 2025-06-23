"use client";

import { useRef, useEffect, useState } from "react";
import Card, { CardData } from "./card";

type CarouselType = "Card1" | "Card2" | "Card3" | "Card4" | "Card5" | "Card6";

type CarouselProps = {
  type: CarouselType;
  data?: CardData[];
};

export function Carousel({ type, data }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainer = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [apiData, setApiData] = useState<Record<CarouselType, CardData[]>>({
    Card1: [],
    Card2: [],
    Card3: [],
    Card4: [],
    Card5: [],
    Card6: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Загружаем данные только если не переданы через props
    if (!data) {
      setLoading(true);

      const fetchData = async () => {
        try {
          const endpoints = [
            "/api/classes",
            "/api/studio",
            "/api/events",
            "/api/trainers",
            "/api/single-classes",
            "/api/subscriptions",
          ];

          const responses = await Promise.all(
            endpoints.map((endpoint) => fetch(endpoint))
          );

          const responseData = await Promise.all(
            responses.map((res) => res.json())
          );

          setApiData({
            Card1: responseData[0],
            Card2: responseData[1],
            Card3: responseData[2],
            Card4: responseData[3],
            Card5: responseData[4],
            Card6: responseData[5],
          });
        } catch (error) {
          console.error("Failed to fetch data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [type, data]);

  const getData = (): CardData[] => {
    // Используем переданные данные если они есть
    if (data) return data;

    // Используем данные из состояния API
    return apiData[type] || [];
  };

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  useEffect(() => {
    const currentData = getData();
    slideRefs.current = slideRefs.current.slice(0, currentData.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        root: scrollContainer.current,
        threshold: 0.6,
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, [type, apiData, data]); // Добавлены зависимости

  const getCardWidth = () => {
    // Пример реализации (настройте под ваш дизайн)
    return "w-[300px] md:w-[350px]";
  };

  if (loading && !data) {
    return (
      <div className="relative group px-4">
        <div className="flex gap-4 pb-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={`loading-${index}`}
              className={`snap-center flex-shrink-0 ${getCardWidth()} h-48 bg-gray-200 animate-pulse rounded-lg`}
            />
          ))}
        </div>
      </div>
    );
  }

  const currentData = getData();

  return (
    <div className="relative group px-4">
      <div
        ref={scrollContainer}
        className="flex gap-4 pb-4 overflow-x-auto snap-x scroll-smooth scrollbar-hide"
      >
        {currentData.map((item, index) => (
          <div
            ref={(el) => (slideRefs.current[index] = el)}
            key={`${type}-${index}`}
            className={`snap-center flex-shrink-0 ${getCardWidth()}`}
          >
            <Card
              type={type}
              data={{ ...item, className: item.className || "" }}
            />
          </div>
        ))}
      </div>

      {currentData.length > 0 && (
        <div className="flex justify-center gap-2 mt-4 md:lg:hidden">
          {currentData.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-black" : "bg-gray-300"
              }`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
