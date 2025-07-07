"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function Meditation() {
  return (
    <>
      <section className="meditation md:mx-auto" id="massage">
        <div className="md:container md:mx-auto max-w-full md:lg:max-w-[1200px] mt-[120px] md:px-4 text-[#494542]">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="hidden md:block content flex-1 text-left">
              <h2 className="font-[400px] text-[42px] leading-[48px]">
                Посетите практики <br />
                гвоздестояния и медитаций <br />с поющими чашами
              </h2>
              <p className="text-[22px] mt-[35px]">
                Восстановите внутренний покой и гармонию, <br />
                снимите напряжение и усталость с помощью <br />
                звуковых медитаций и гвоздестояния. <br />
                Практики проводятся мастерами, <br />в индивидуальном формате и
                мини-группах.
              </p>
            </div>
            <div className="flex max-w-full md:mx-auto ml-[5px] flex-row gap-4 md:flex-shrink-0">
              <Image
                src={"/nails.jpg"}
                alt={"nails"}
                width={253}
                height={410}
                className={
                  "rounded-[20px] object-cover md:w-full w-[200px] max-w-[253px] h-auto"
                }
              />
              <Image
                src={"/cup.jpg"}
                alt={"cup"}
                width={253}
                height={410}
                className={
                  "rounded-[20px] object-cover md:w-full w-[200px] max-w-[253px] h-auto"
                }
              />
            </div>
          </div>
          <div className="block md:hidden content text-left mt-[3.35rem] ml-[1.11rem]">
            <h2 className="font-[400px] text-[42px] leading-[48px]">
              Посетите практики <br />
              гвоздестояния и медитаций <br />с поющими чашами
            </h2>
            <p className="text-[18px] mt-[35px]">
              Восстановите внутренний покой и гармонию, снимите напряжение и
              усталость с помощью звуковых медитаций и гвоздестояния. Практики
              проводятся мастерами, в индивидуальном формате и мини-группах.
            </p>
            <Button
              variant="solid"
              className="flex h-[44px] w-[263px] justify-center items-center font-medium mt-[1.94rem]"
            >
              Следить за мероприятиями
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
                  fill="#EEE5DC"
                />
              </svg>
            </Button>
          </div>
        </div>
        <section className="group-photo">
          <div className="md:block hidden container mx-auto max-w-full md:lg:max-w-[1200px] mt-[149px] px-4">
            <Image
              src={"/class5.jpg"}
              alt={"class5"}
              width={1200}
              height={549}
              className={"rounded-[20px] w-full h-auto object-cover"}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="health-image mt-[4.29rem] lg:md:hidden block">
            <Image
              src="/class5.jpg"
              className="h-[471px] object-cover"
              alt="class5"
              width={706}
              height={471}
            />
          </div>
        </section>
      </section>
    </>
  );
}
