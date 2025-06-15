"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export default function Meditation() {
  return (
    <>
      <section className="meditation mx-auto" id="massage">
        <div className="md:container lg:container md:flex lg:flex md:justify-between lg:justify-between mt-[120px] md:mx-auto lg:mx-auto max-w-full text-[#494542]">
          <div className="md:block lg:block hidden content max-w-[1200px] text-left mr-[50px]">
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
          <div className="images flex ml-0 w-full">
            <Image
              src={"/nails.jpg"}
              alt={"nails"}
              width={253}
              height={410}
              className={"mr-[22px] rounded-[20px] object-cover"}
            ></Image>
            <Image
              src={"/cup.jpg"}
              alt={"cup"}
              width={253}
              height={410}
              className={"rounded-[20px] object-cover"}
            ></Image>
          </div>
          <div className="block md:hidden lg:hidden content max-w-full text-left mr-[50px] mt-[4.3rem] ml-[20px]">
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
            <Button
              variant="solid"
              className="flex mt-[2.14rem] h-[3.14rem] w-[18.79rem] justify-center items-center font-medium mr-[42px] rounded-[1.43rem]"
            >
              Следить за мероприятиями
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
        </div>
        <section className="group-photo">
          <div className="md:container lg:container mx-auto w-full mt-[149px]">
            <Image
              src={"/class5.jpg"}
              alt={"class5"}
              width={1200}
              height={549}
              className={"w-full object-cover h-[37.64rem]"}
            ></Image>
          </div>
        </section>
      </section>
    </>
  );
}
