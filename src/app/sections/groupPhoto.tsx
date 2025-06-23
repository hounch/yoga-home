"use client";
import Image from "next/image";

export default function GroupPhoto() {
  return (
    <>
<<<<<<< Updated upstream
      <section className="group-photo px-4">
        <div className="container mx-auto max-w-[1200px] mt-8 sm:mt-12">
=======
      <section className="group-photo md:px-4 lg:px-4 px-0 mx-0 max-w-full md:lg:max-w-[1200px] lg:md:mx-auto">
        <div className="container md:block lg:block hidden mx-auto max-w-full mt-8">
>>>>>>> Stashed changes
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
