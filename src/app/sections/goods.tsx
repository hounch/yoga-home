"use client";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Goods() {
  return (
    <>
      <section className="goods">
        <div className="container mx-auto max-w-[1200px]">
          <div className="goods-content grid grid-cols-2 grid-rows-3 text-left text-[#494542]">
            <h2 className="font-[400px] text-[42px]">
              Вам не нужно ни о чем
              <br />
              беспокоиться, у нас есть все
              <br />
              что вам нужно
            </h2>
            {/* TODO отступы для фото */}
            <Image
              src={"/studio9.jpg"}
              width={401}
              height={463}
              alt="studio9"
              className="row-span-3 ml-[112px] rounded-[20px] align-self"
            ></Image>
            <ul className="text-[22px] mt-[35px] w-[463px] row-span-2">
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px]">
                Весь инвентарь для йоги
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Опытные преподаватели
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Внимание к особенностям учеников
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Душ и раздевалка
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Средства личной гигиены
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Фотозона
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-[1200px] text-center text-[#494542] pt-[89px]">
          <div className="content flex mb-[120px]">
            <Image
              src={"/studio10.jpg"}
              width={562}
              height={374}
              alt="studio10"
              className="mr-[19px] rounded-[20px]"
            ></Image>
            <Image
              src={"/studio11.jpg"}
              width={562}
              height={374}
              alt="studio10"
              className="rounded-[20px]"
            ></Image>
          </div>
          <h2 className="font-[400px] text-[42px]">
            Открывайте новое для себя
            <br />
            на мероприятиях в Йога Хом
          </h2>
          <p className="text-[22px] mt-[35px]">
            Йога Хом — это небольшая семья, и мы часто
            <br />
            устраиваем мероприятия в студии и на открытом
            <br />
            воздухе, проводим мастер-классы и встречи
            <br />с приглашенными спикерами.
          </p>
          <Button
            variant="solid"
            className="flex h-[40px] w-[223px] justify-center items-center mt-[40px] mx-auto"
          >
            Следить за новостями
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
        </div>
      </section>
    </>
  );
}
