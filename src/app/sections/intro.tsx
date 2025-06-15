"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <section className="intro">
        <div className="container mx-auto pr-[20px] pl-[20px] pt-[90px] mt-[6rem] w-full">
          <div className="studio-content text-center text-[#494542]">
            <h2 className="font-[400px] text-[42px] leading-[114%]">
              Йога хом — это дом здорового тела,{" "}
              <span className="md:hidden">вашей </span>красоты и{" "}
              <span className="hidden md:inline">внутреннего </span>
              <span className="md:hidden">духовного </span>роста
              <span className="hidden md:inline">
                , место силы, где уютно, как дома
              </span>
            </h2>
            <p className="text-[22px] mt-[35px] font-[400px] leading-[30px]">
              Уже 4 года мы помогаем вам обрести красивую осанку и здоровую
              спину, познать себя и свой внутренний мир, стать увереннее и
              счастливее
            </p>
          </div>
          <div className="hidden md:flex justify-evenly mt-[91px] mb-[33px]">
            <Image
              src="/main1.jpg"
              className="rounded-[20px]"
              alt="studio1"
              width={374}
              height={247}
            />
            <Image
              src="/main2.jpg"
              className="rounded-[20px]"
              alt="studio2"
              width={374}
              height={247}
            ></Image>
            <Image
              src="/main3.jpg"
              className="rounded-[20px]"
              alt="studio3"
              width={374}
              height={247}
            ></Image>
          </div>
        </div>
        <div className="md:hidden flex mt-[5.7rem] h-[477px] w-full">
          <Image
            src="/main3.jpg"
            className="w-full object-cover"
            alt="main3"
            width={718}
            height={477}
          />
        </div>
      </section>
    </>
  );
}
