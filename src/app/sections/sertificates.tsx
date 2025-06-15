"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Carousel } from "../ui/carousel";

export default function Sertificates() {
  return (
    <>
      <section className="sertificates">
        <div className="container mt-[120px] mx-auto max-w-[1200px] text-center text-[#494542]">
          <h2 className="font-[400px] text-[42px] leading-[48px]">
            Подарочные сертификаты
          </h2>

          <div className="hidden lg:flex md:flex content max-w-[1200px] mt-[90px] justify-center">
            <Image
              src={"/sertificate1.jpg"}
              width={559}
              height={414}
              alt={"sertificate1"}
              className={"mr-[21px] object-cover"}
            ></Image>
            <Image
              src={"/sertificate2.jpg"}
              width={559}
              height={414}
              alt={"sertificate2"}
              className={"object-cover"}
            ></Image>
          </div>
          <div className="block lg:hidden md:hidden mt-[2.57rem]">
            <Carousel type="Card8" />
          </div>
          <Button
            variant="outline"
            className="flex w-full md:h-[40px] md:w-[330px] md:mt-[40px] lg:h-[40px] lg:w-[330px] lg:mt-[40px] justify-center items-center lg:font-medium font-medium"
          >
            Приобрести сертификат/ абонемент
            <svg
              className="ml-[10px]"
              width="23"
              height="7"
              viewBox="0 0 23 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2999 3.62023C22.4607 3.45944 22.4607 3.19876 22.2999 3.03798L19.6798 0.417874C19.519 0.257091 19.2583 0.257091 19.0976 0.417874C18.9368 0.578656 18.9368 0.839337 19.0976 1.00012L21.4265 3.3291L19.0976 5.65809C18.9368 5.81887 18.9368 6.07955 19.0976 6.24033C19.2583 6.40112 19.519 6.40112 19.6798 6.24033L22.2999 3.62023ZM-3.59928e-08 3.74081L22.0088 3.74081L22.0088 2.91739L3.59928e-08 2.91739L-3.59928e-08 3.74081Z"
                fill="#494542"
              />
            </svg>
          </Button>
        </div>
      </section>
    </>
  );
}
