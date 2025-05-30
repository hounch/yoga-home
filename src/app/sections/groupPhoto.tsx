"use client";
import Image from "next/image";

export default function GroupPhoto() {
  return (
    <>
      <section className="group-photo px-4">
        <div className="container mx-auto max-w-[1200px] mt-8 sm:mt-12">
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
