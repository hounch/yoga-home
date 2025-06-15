"use client";
import { Carousel } from "../ui/carousel";
import Image from "next/image";

export default function Studio() {
  return (
    <>
      <section className="studio" id="studio">
        <div className="max-w-full mt-[79px] px-0 mx-0">
          <div className="studio-image w-full block md:hidden mb-[5.7rem]">
            <Image
              className="studio-image object-cover w-full h-[33.6rem]"
              src="/studio1.jpg"
              alt="studio"
              width={706}
              height={471}
            ></Image>
          </div>
          <div className="studio-content mx-auto text-center text-[#494542]">
            <h2 className="font-[400px] text-[42px] leading-[114%]">
              Йога проходит в уютном,
              <br />
              светлом пространстве студии
            </h2>
            <p className="md:block hidden text-[22px] mt-[30px] font-[400px] leading-[30px]">
              Здесь вы соединитесь с собой, выполняя дыхательные
              <br />и двигательные практики, получая истинное
              <br />
              удовольствие от процесса познания вашего тела
            </p>
            <p className="block md:hidden text-[22px] mt-[30px] font-[400px] leading-[30px]">
              Уже 4 года мы помогаем вам обрести красивую осанку и здоровую
              спину, познать себя и свой внутренний мир, стать увереннее и
              счастливее
            </p>
          </div>
          <div className="carousel hidden w-[1200px] mx-auto md:block lg:block pt-[107px]">
            <Carousel type="Card2" />
          </div>
          <div className="studio-image block md:hidden mt-[4.29rem]">
            <Image
              className="studio-image object-cover w-full h-[28.64rem]"
              src="/studio5.jpg"
              alt="studio"
              width={706}
              height={471}
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
