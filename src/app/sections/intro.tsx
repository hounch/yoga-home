"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <section className="intro">
        <div className="container mx-auto pr-[20px] pl-[20px] pt-[90px] mt-[6rem] max-w-full md:lg:max-w-[1200px]">
          <div className="studio-content text-center text-[#494542] max-w-full md:lg:max-w-[1200px] lg:md:mx-auto">
            <h2 className="font-[400px] text-[42px] leading-[114%]">
              Йога хом — это дом здорового тела,{" "}
              <span className="mobile-show">вашей </span>красоты и{" "}
              <span className="desktop-show">внутреннего </span>
              <span className="mobile-show">духовного </span>роста
              <span className="desktop-show">
                , место силы, где уютно, как дома
              </span>
            </h2>
            <p className="text-[22px] mt-[35px] font-[400px] leading-[30px]">
              Уже 4 года мы помогаем вам обрести красивую осанку
              <br />и здоровую спину, познать себя и свой внутренний мир,
              <br />
              стать увереннее и счастливее
            </p>
          </div>
          <div className="hidden md:lg:justify-center md:flex mt-[91px] mb-[33px]">
            <Image
              src="/main1.jpg"
              className="rounded-[20px] lg:md:mr-[20px]"
              alt="studio1"
              width={374}
              height={247}
            />
            <Image
              src="/main2.jpg"
              className="rounded-[20px] lg:md:mr-[20px]"
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
      </section>
    </>
  );
}
