"use client";
import Image from "next/image";

export default function GroupPhoto() {
  return (
    <>
      <section className="group-photo md:px-4 lg:px-4 px-0 mx-0 w-full">
        <div className="container md:block lg:block hidden mx-auto max-w-full mt-8">
          <Image
            src={"/group1.jpg"}
            height={717}
            width={1200}
            alt="group1"
          ></Image>
        </div>
        <div className="md:hidden lg:hidden block max-w-full mt-[5.71rem]">
          <Image
            src={"/main1.jpg"}
            height={717}
            width={1200}
            alt="main1"
            className={"w-full object-cover h-[37.64rem]"}
          ></Image>
        </div>
      </section>
    </>
  );
}
