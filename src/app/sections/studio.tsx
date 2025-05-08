"use client";
import { Carousel } from "../ui/carousel";

export default function Studio() {
  return (
    <>
      <section className="studio">
        <div className="container mx-auto max-w-[1200px] mt-[79px]">
          <div className="studio-content text-center text-[#494542]">
            <h2 className="font-[400px] text-[42px]">
              Йога проходит в уютном,
              <br />
              светлом пространстве студии
            </h2>
            <p className="text-[22px] mt-[30px]">
              Здесь вы соединитесь с собой, выполняя дыхательные
              <br />и двигательные практики, получая истинное
              <br />
              удовольствие от процесса познания вашего тела
            </p>
          </div>
          <div className="carousel pt-[107px]">
            <Carousel type="Card2" />
          </div>
        </div>
      </section>
    </>
  );
}
