import Image from "next/image";
import { Button } from "./ui/button";
import { ClassCard } from "./ui/card";
import { ClassesCarousel } from "./ui/carousel";

export default function Home() {
  return (
    <>
      <header>
        <div className="container mr-auto ml-auto pr-[20px] pl-[20px] max-w-[1200px]">
          <div className="header-content flex justify-between items-center h-[83]">
            <Image
              className="header-content_logo"
              src="/logo.png"
              alt="logo"
              quality={100}
              width={56}
              height={42}
            ></Image>
            <nav className="text-[#494542]">
              <a className="mr-[20px]" href="#">
                Студия
              </a>
              <a className="mr-[20px]" href="#">
                Классы
              </a>
              <a className="mr-[20px]" href="#">
                Преподаватели
              </a>
              <a className="mr-[20px]" href="#">
                Мероприятия
              </a>
              <a className="mr-[20px]" href="#">
                Массаж
              </a>
              <a className="mr-[20px]" href="#">
                Аренда
              </a>
              <a href="#">Контакты</a>
            </nav>
            <div className="header-content_last">
              <a>
                <Button variant="outline" className="h-[40px] w-[173px]">
                  Записаться на йогу
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="relative rounded-[20px]">
        {/* h-[273] */}
        <div className="container mt-[31px] mr-auto ml-auto pr-[20px] pl-[20px] max-w-[1200px]">
          <div className="main-content">
            <h2 className="font-[400px] text-[42px]">
              Добро пожаловать в Йога Хом,
              <br /> место силы и спокойствия
            </h2>
            <div className="flex mt-[40px] mb-[61px]">
              <Button
                variant="solid"
                className="flex h-[40px] w-[211px] pr-[0] justify-center items-center font-medium mr-[32px]"
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
                className=" flex h-[40px] w-[228px] justify-center items-center font-medium"
              >
                Проконсультироваться
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
            <div className="relative z-0">
              <Image
                src="/group.png"
                alt="group"
                width={1200}
                height={511}
              ></Image>
            </div>
          </div>
        </div>
      </main>
      <section className="studio">
        <div className="container mr-auto ml-auto max-w-[1200px] pr-[20px] pl-[20px] pt-[90px]">
          <div className="studio-content text-center text-[#494542]">
            <h2 className="font-[400px] text-[42px]">
              Йога хом — это дом здорового тела,
              <br />
              красоты и внутреннего роста, место
              <br />
              силы, где уютно, как дома
            </h2>
            <p className="text-[22px] mt-[35px]">
              Уже 4 года мы помогаем вам обрести красивую осанку
              <br />и здоровую спину, познать себя и свой внутренний мир,
              <br />
              стать увереннее и счастливее
            </p>
          </div>
          <div className="flex justify-evenly mt-[91px] mb-[33px]">
            <Image
              src="/studio1.png"
              alt="studio1"
              width={374}
              height={247}
            ></Image>
            <Image
              src="/studio2.png"
              alt="studio2"
              width={374}
              height={247}
            ></Image>
            <Image
              src="/studio3.png"
              alt="studio3"
              width={374}
              height={247}
            ></Image>
          </div>
        </div>
      </section>
      <section className="classes">
        <div className="container mr-auto ml-auto max-w-[1200px] pr-[20px] pl-[20px] pt-[88px]">
          <div className="classes-content text-center text-[#494542]">
            <h2 className="font-[400px] text-[42px]">
              Выбери одно или несколько
              <br />
              направлений йоги себе по душе
            </h2>
            <p className="text-[22px] mt-[35px]">
              Соединитесь со своим телом и душой, войдя
              <br />в состояние умиротворения и спокойствия с помощью
              <br />
              авторских техник преподавателей нашей студии
            </p>
          </div>
          <div className="carousel flex justify-evenly">
            {/* <ClassCard
              imageSrc="/class1.png"
              title="Йога критического выравнивания"
              type="группа"
              cost="от 400"
              description="Йога критического выравнивания (Critical Alignment Yoga) — новая голландская методика восстановления позвоночника. В практике используется ряд опорных приспособлений: планка для снятия напряжения мышц вдоль позвоночника, войлочный валик, 
бэкбендер и хэдстендер."
              duration="1 час 15 минут"
              className="max-w-[360px]"
            /> */}
            <ClassesCarousel />
          </div>
        </div>
      </section>
      {/*<section className="home"></section>
        <section className="classes"></section>
        <section className="studio"></section>
        <section className="events"></section>
        <section className="rent"></section>
        <section className="trainers"></section>
        <section className="massage"></section>
        <section className="contacts"></section>*/}
    </>
  );
}
