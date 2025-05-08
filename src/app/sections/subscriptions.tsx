"use client";

import { Carousel } from "../ui/carousel";

export default function Subscriptions() {
  return (
    <>
      <section className="one-time-subscription">
        <div className="container mt-[120px] mx-auto max-w-[1200px] text-center text-[#494542]">
          <h2 className="font-[400px] text-[42px] leading-[48px]">
            Разовые абонементы Йога Хом
          </h2>
          <div className="one-tine-subscription-content">
            <Carousel type="Card5" />
          </div>
        </div>
      </section>
      <section className="monthly-subscription">
        <div className="container mt-[460px] mx-auto max-w-[1200px] text-center text-[#494542]">
          <h2 className="font-[400px] text-[42px] leading-[48px]">
            Месячные абонементы Йога Хом
          </h2>
          <div className="one-tine-subscription-content">
            <Carousel type="Card6" />
          </div>
        </div>
      </section>
    </>
  );
}
