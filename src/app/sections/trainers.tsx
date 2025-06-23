"use client";
import { Carousel } from "../ui/carousel";
import { useEffect, useState } from "react";

interface TrainersProps {
  serverData: Array<Record<string, unknown>>;
}

function TrainersClient({ data }: TrainersProps["serverData"]) {
  return (
    <>
      <section className="trainers">
        <div className="container mx-auto w-[1200px] mt-[90px] text-center">
          <h2 className="font-[400px] text-[42px] leading-[114%] mb-[120px]">
            Наши преподаватели помогут
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
export default function TrainersWrapper({ serverData }: TrainersProps) {
  return <TrainersClient data={serverData} />;
}
