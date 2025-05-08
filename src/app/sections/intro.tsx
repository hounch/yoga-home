"use client";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <section className="intro">
        <div className="container mr-auto ml-auto max-w-[1200px] pr-[20px] pl-[20px] pt-[90px]">
          <div className="studio-content text-center text-[#494542]">
            <h2 className="font-[400px] text-[42px]">
              Йога хом — это дом здорового тела,
              <br />
              красоты и внутреннего роста, место
              <br />
              силы, где уютно, как дома
            </h2>
            <p className="text-[22px] mt-[35px]">
              Уже 4 года мы помогаем вам обрести красивую осанку
              <br />и здоровую спину, познать себя и свой внутренний мир,
              <br />
              стать увереннее и счастливее
            </p>
          </div>
          <div className="flex justify-evenly mt-[91px] mb-[33px]">
            <Image
              src="/main1.jpg"
              className="rounded-[20px]"
              alt="studio1"
              width={374}
              height={247}
            ></Image>
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
      </section>
    </>
  );
}
