"use client";
import { Carousel } from "../ui/carousel";

export default function Trainers() {
  return (
    <>
      <section className="trainers" id="trainers">
        <div className="container mx-auto w-full mt-[90px] text-left md:text-center">
          <h2 className="font-[400px] text-[42px] leading-[114%] mb-[120px]">
            Наши{" "}
            <span className="inline md:hidden lg:hidden">внимательные </span>
            преподаватели помогут
            <br className="hidden md:inline lg:inline" /> вам поставить технику
            <br className="hidden md:inline lg:inline" /> и аккуратно вас
            направят
          </h2>
          <Carousel type="Card4" />
        </div>
      </section>
    </>
  );
}
