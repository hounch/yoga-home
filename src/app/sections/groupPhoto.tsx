"use client";
import Image from "next/image";

export default function GroupPhoto() {
  return (
    <>
      <section className="group-photo">
        <div className="container mx-auto w-[1200px] mt-[120px]">
          <Image
            src={"/group1.jpg"}
            height={717}
            width={1200}
            alt="group1"
          ></Image>
        </div>
      </section>
    </>
  );
}
