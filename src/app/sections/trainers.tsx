"use client";
import { Carousel } from "../ui/carousel";
import Image from "next/image";

interface TrainersProps {
  data: Array<Record<string, unknown>>;
}

export default function Trainers({ data }: TrainersProps) {
  return (
    <>
      <section className="trainers">
        <div className="trainers-image mt-[4.29rem] lg:md:hidden block">
          <Image
            src="/main1.jpg"
            className="h-[471px] object-cover"
            alt="main1"
            width={706}
            height={471}
          />
        </div>
        <div className="mx-auto max-w-full md:lg:max-w-[1200px] mt-[90px] lg:md:text-center text-left">
          <h2 className="font-[400px] lg:md:mx-auto ml-[1.43rem] text-[42px] leading-[114%] mb-[120px]">
            Наши <span className="lg:md:hidden inline">внимательные </span>
            преподаватели помогут
            <br />
            вам поставить технику
            <br />и аккуратно вас направят
          </h2>
          <Carousel type="Card4" data={data} />
        </div>
      </section>
    </>
  );
}
