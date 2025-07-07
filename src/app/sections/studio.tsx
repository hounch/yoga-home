"use client";
import { Carousel } from "../ui/carousel";
import Image from "next/image";

interface StudioProps {
  studioData: Array<Record<string, unknown>>;
}

export default function Studio({ studioData }: StudioProps) {
  return (
    <>
      <section className="studio">
        <div className="md:lg:hidden block mt-[5.71rem]">
          <Image
            src="/studio1.jpg"
            className="h-[471px] object-cover"
            alt="studio1"
            width={706}
            height={471}
          />
        </div>
        <div className="ld:md:container mx-auto max-w-full md:lg:max-w-[1200px] mt-[79px] px-4">
          <div className="studio-content text-center text-[#494542]">
            <h2 className="font-[400px] text-2xl md:text-[42px] leading-[114%]">
              Йога проходит в уютном,
              <br />
              светлом пространстве студии
            </h2>
            <p className="text-lg md:text-[22px] mt-[30px] font-[400px] leading-[30px]">
              Здесь вы соединитесь с собой, выполняя дыхательные
              <br className="hidden md:block" /> и двигательные практики,
              получая истинное
              <br className="hidden md:block" /> удовольствие от процесса
              познания вашего тела
            </p>
          </div>
          <div className="carousel w-full mx-auto pt-[60px] md:pt-[107px] lg:md:block hidden">
            <Carousel type="Card2" data={studioData} />
          </div>
        </div>
        <div className="studio-image mt-[4.29rem] md:lg:hidden block">
          <Image
            src="/studio5.jpg"
            className="h-[471px] object-cover"
            alt="studio5"
            width={706}
            height={471}
          />
        </div>
      </section>
    </>
  );
}
