"use client";

import { useRef, useEffect, useState } from "react";
import {
	CardData1,
	CardData2,
	CardData3,
} from "../constants";
import Card, { CardData } from "./card";

type CarouselType = "Card1" | "Card2" | "Card3" | "Card4" | "Card5" | "Card6";

type CarouselProps = {
<<<<<<< Updated upstream
	type: CarouselType;
	data?: CardData[]; // Опциональные данные, переданные через props
};

export function Carousel({ type, data }: CarouselProps) {
	const scrollContainer = useRef<HTMLDivElement>(null);
	const [cardData4, setCardData4] = useState<CardData[]>([]);
	const [cardData5, setCardData5] = useState<CardData[]>([]);
	const [cardData6, setCardData6] = useState<CardData[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Загружаем данные из API только если данные не переданы через props
		if ((type === "Card4" || type === "Card5" || type === "Card6") && !data) {
			setLoading(true);
=======
  type: CarouselType;
  data?: CardData[];
};

export function Carousel({ type, data }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0); // for active index
  const scrollContainer = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [cardData1, setCardData1] = useState<CardData[]>([]);
  const [cardData2, setCardData2] = useState<CardData[]>([]);
  const [cardData3, setCardData3] = useState<CardData[]>([]);
  const [cardData4, setCardData4] = useState<CardData[]>([]);
  const [cardData5, setCardData5] = useState<CardData[]>([]);
  const [cardData6, setCardData6] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Загружаем данные из API только если данные не переданы через props
    if (
      (type === "Card1" ||
        type === "Card2" ||
        type === "Card3" ||
        type === "Card4" ||
        type === "Card5" ||
        type === "Card6") &&
      !data
    ) {
      setLoading(true);

      const fetchData = async () => {
        try {
          const responses = await Promise.all([
            fetch("/api/classes"),
            fetch("/api/studio"),
            fetch("/api/events"),
            fetch("/api/trainers"),
            fetch("/api/single-classes"),
            fetch("/api/subscriptions"),
          ]);

          const [trainers, singleClasses, subscriptions] = await Promise.all(
            responses.map((res) => res.json())
          );

          setCardData4(trainers);
          setCardData5(singleClasses);
          setCardData6(subscriptions);
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
    if (data) {
      return data;
    }
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
>>>>>>> Stashed changes

			const fetchData = async () => {
				try {
					const responses = await Promise.all([
						fetch('/api/trainers'),
						fetch('/api/single-classes'),
						fetch('/api/subscriptions')
					]);

<<<<<<< Updated upstream
					const [trainers, singleClasses, subscriptions] = await Promise.all(
						responses.map(res => res.json())
					);

					setCardData4(trainers);
					setCardData5(singleClasses);
					setCardData6(subscriptions);
				} catch (error) {
					console.error('Failed to fetch data:', error);
				} finally {
					setLoading(false);
				}
			};

			fetchData();
		}
	}, [type, data]);

	const getData = (): CardData[] => {
		// Если данные переданы через props, используем их
		if (data) {
			return data;
		}

		switch (type) {
			case "Card1":
				return CardData1;
			case "Card2":
				return CardData2;
			case "Card3":
				return CardData3;
			case "Card4":
				return cardData4;
			case "Card5":
				return cardData5;
			case "Card6":
				return cardData6;
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
			default:
				return "w-[90vw] sm:w-[360px]";
		}
	};

	if (loading && (type === "Card4" || type === "Card5" || type === "Card6") && !data) {
		return (
			<div className="relative group px-4">
				<div className="flex gap-4 pb-4">
					{/* Loading skeleton */}
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

	return (
		<div className="relative group px-4">
			<div
				ref={scrollContainer}
				className="flex gap-4 pb-4 overflow-x-auto snap-x scroll-smooth"
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
=======
  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  useEffect(() => {
    const data = getData();
    slideRefs.current = slideRefs.current.slice(0, data.length);

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
  }, [type]);

  if (
    loading &&
    (type === "Card1" ||
      type === "Card2" ||
      type === "Card3" ||
      type === "Card4" ||
      type === "Card5" ||
      type === "Card6") &&
    !data
  ) {
    return (
      <div className="relative group px-4">
        <div className="flex gap-4 pb-4">
          {/* Loading skeleton */}
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

  return (
    <div className="relative group px-4">
      <div
        ref={scrollContainer}
        className="flex gap-4 pb-4 overflow-x-auto snap-x scroll-smooth scrollbar-hide"
      >
        {getData().map((item, index) => (
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
      <div className="flex justify-center gap-2 mt-4 md:lg:hidden">
        {getData().map((_, index) => (
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
    </div>
  );
>>>>>>> Stashed changes
}
{
  /* <div className="flex justify-center mt-4 space-x-2">
        {/* {getData().map((_, index) => { */
}
{
  /* <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400" */
}
{
  /* }`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Перейти к слайду ${index + 1}`}
          />; */
}
{
  /* })} */
}
{
  /* </div> */
}
{
  /* </div> */
}
