"use client";

import Image from "next/image";

export default function Meditation() {
  return (
    <>
      <section className="meditation mx-auto">
        <div className="container flex justify-between mt-[120px] mx-auto max-w-[1200px] text-[#494542]">
          <div className="content max-w-[1200px] text-left mr-[50px]">
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
          <div className="images flex ml-0">
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
        </div>
        <section className="group-photo">
          <div className="container mx-auto w-[1200px] mt-[149px]">
            <Image
              src={"/class5.jpg"}
              alt={"class5"}
              width={1200}
              height={549}
              className={"rounded-[20px] absolute object-cover"}
            ></Image>
          </div>
        </section>
      </section>
    </>
  );
}
