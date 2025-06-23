"use client";
import { Button } from "../ui/button";
import { Carousel } from "../ui/carousel";

export default function Rent() {
  return (
    <>
      <section
        className="rent max-w-full md:lg:max-w-[1200px] lg:md:mx-auto"
        id="rent"
      >
        <div className="container mx-auto max-w-full md:lg:max-w-[1200px] mt-[123px]">
          <Carousel type="Card3" />

          <div className="rent-content text-[#494542] flex mt-[93px] justify-center items-center">
            <div className="w-[562px] pt-[32px]">
              <h2 className="font-[400px] text-[42px] leading-[114%]">
                Вы можете арендовать
                <br />
                100м2 нашей уютной
                <br />и светлой студии
              </h2>
              <p className="text-[22px] ml-[22px] mt-[35px] mb-[40px] leading-[30px]">
                Помещение можно арендовать для йоги,
                <br />
                танцев, фитнеса, практик, девичников,
                <br />
                женских кругов, дней рождений и фотосессий.
              </p>
              <Button
                variant="outline"
                className="flex h-[40px] w-[208px] justify-center items-center font-medium"
              >
                Арендовать студию
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
            <div className="w-[534px] h-[397] bg-[#859974] ml-[46px] text-[#EEE5DC] pt-[32px] pl-[40px] rounded-[20px]">
              <h2 className="font-[400px] text-[42px] leading-[114%]">
                В вашем
                <br />
                распоряжении будут:
              </h2>
              <ul className="text-[22px] list-disc mt-[46px] w-[447px] mx-auto">
                <li className="mb-[28px]">
                  Просторный зал вместимостью
                  <br />
                  20 человек
                </li>
                <li>
                  Оборудование для практик: коврики, гамаки, блоки, ремни,
                  гантели, блостеры
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
