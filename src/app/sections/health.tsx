"use client";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Health() {
  return (
    <>
      <section className="health">
        <div className=" max-w-full md:lg:max-w-[1200px] mt-[8.57rem] flex lg:md:content-between items-center md:lg:mx-auto">
          <div className="content text-left lg:mx-auto max-w-full">
            <div className="health-image mt-[4.29rem] lg:md:hidden block mb-[4.29rem]">
              <Image
                src="/group2.jpg"
                className="h-[471px] object-cover"
                alt="group2"
                width={706}
                height={471}
              />
            </div>
            <h2 className="font-[400px] text-[42px] leading-[48px] md:mx-auto ml-[1.43rem] mb-[35px] ">
              Доверьте здоровье вашего тела
              <br className="md:inline hidden" /> чутким и внимательным
              <br className="md:inline hidden" /> профессионалам
              <br className="md:hidden inline" /> Йога Хом
            </h2>
            <p className="md:text-[22px] text-[18px] leading-[30px] ml-[22px] mb-[40px]">
              Даже если вы знаете о йоге только
              <br className="md:inline hidden" /> из книг и никогда не пробовали
              <br className="md:inline hidden" /> самостоятельно — мы заранее
              уточним
              <br className="md:inline hidden" /> состояние вашего здоровья и
              предпочтения,
              <br className="md:inline hidden" /> и уведомим об этом
              преподавателя
            </p>
            <div className="flex md:flex-row flex-col ml-[1.43rem]">
              <Button
                variant="solid"
                className="flex h-[40px] w-[209px] justify-center items-center font-medium mr-[42px] mb-[0.57rem]"
              >
                Записаться на йогу
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
                className="flex h-[40px] w-[241px] justify-center items-center font-medium"
              >
                Перейти к расписанию
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
          </div>
          <Image
            src={"/group2.jpg"}
            width={372}
            height={404}
            alt="group2"
            className="md:block lg:block hidden rounded-[20px] h-[404px] w-[372px] object-cover lg:md:mx-auto md:lg:max-w-[1200px]"
          ></Image>
        </div>
        <div className="health-image mt-[4.29rem] lg:md:hidden block mb-[4.29rem]">
          <Image
            src="/studio3.jpg"
            className="h-[471px] object-cover"
            alt="studio3"
            width={706}
            height={471}
          />
        </div>
      </section>
      <section className="group-photo">
        <div className="mx-auto max-w-full md:lg:max-w-[1200px] mt-[107px] md:block hidden lg:block">
          <Image
            src={"/group3.jpg"}
            height={579}
            width={1200}
            alt="group3"
            className="h-[579px] object-cover"
          ></Image>
        </div>
      </section>
    </>
  );
}
