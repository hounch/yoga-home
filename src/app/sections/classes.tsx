"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Carousel } from "../ui/carousel";

export default function Classes() {
  return (
    <>
      <section className="classes">
        <div className="container mx-auto max-w-[1200px] px-5 pt-[88px]">
          <div className="classes-content text-center text-[#494542] mb-[101px]">
            <h2 className="font-[400px] text-[42px]">
              Выбери одно или несколько
              <br />
              направлений йоги себе по душе
            </h2>
            <p className="text-[22px] mt-[35px]">
              Соединитесь со своим телом и душой, войдя
              <br />в состояние умиротворения и спокойствия с помощью
              <br />
              авторских техник преподавателей нашей студии
            </p>
          </div>
          <div className="carousel flex justify-evenly">
            <Carousel type="Card1" />
          </div>
          <div className="flex">
            <Button
              variant="solid"
              className="flex h-[40px] w-[228px] justify-center items-center font-medium mt-[40px] mr-[40px]"
            >
              Перейти к расписанию
              <svg
                className="ml-[14px]"
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2999 3.5587C22.4607 3.39792 22.4607 3.13724 22.2999 2.97646L19.6798 0.35635C19.519 0.195568 19.2583 0.195568 19.0976 0.35635C18.9368 0.517133 18.9368 0.777813 19.0976 0.938596L21.4265 3.26758L19.0976 5.59656C18.9368 5.75735 18.9368 6.01803 19.0976 6.17881C19.2583 6.33959 19.519 6.33959 19.6798 6.17881L22.2999 3.5587ZM-3.59928e-08 3.67929L22.0088 3.67929L22.0088 2.85587L3.59928e-08 2.85587L-3.59928e-08 3.67929Z"
                  fill="#EEE5DC"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              className="flex h-[40px] w-[228px] justify-center items-center font-medium mt-[40px]"
            >
              Наши абонементы
              <svg
                className="ml-[14px]"
                width="23"
                height="7"
                viewBox="0 0 23 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2999 3.5587C22.4607 3.39792 22.4607 3.13724 22.2999 2.97646L19.6798 0.35635C19.519 0.195568 19.2583 0.195568 19.0976 0.35635C18.9368 0.517133 18.9368 0.777813 19.0976 0.938596L21.4265 3.26758L19.0976 5.59656C18.9368 5.75735 18.9368 6.01803 19.0976 6.17881C19.2583 6.33959 19.519 6.33959 19.6798 6.17881L22.2999 3.5587ZM-3.59928e-08 3.67929L22.0088 3.67929L22.0088 2.85587L3.59928e-08 2.85587L-3.59928e-08 3.67929Z"
                  fill="#494542"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
