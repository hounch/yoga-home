"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ClassSub } from "./ui/subscription";
import { useState, useEffect } from "react";
import { ClassCard } from "./ui/card";
import { ClassesCarousel, CardData } from "./ui/carousel";

export default function Home() {
  const [cards, setCards] = useState<CardData[]>([]);
  const [photos, setPhotos] = useState<CardData[]>([]);
  // Загрузка данных (пример)
  useEffect(() => {
    // Может быть API-запрос или импорт из файла
    const loadCards = async () => {
      // Пример статических данных (можно заменить на API-запрос)
      const mockCards: CardData[] = [
        {
          imageSrc: "/main1.jpg",
          title: "Йога критического выравнивания",
          type: "группа",
          cost: "от 400 р",
          description:
            "Йога критического выравнивания (Critical Alignment Yoga) — новая голландская методика восстановления позвоночника. В практике используется ряд опорных приспособлений: планка для снятия напряжения мышц вдоль позвоночника, войлочный валик, бэкбендер и хэдстендер.",
          duration: "1ч 15мин",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class2.jpg",
          title: "Йога-терапия позвоночника",
          type: "группа",
          cost: "от 400 р",
          description:
            "Мягкая практика с использованием элементов ЛФК, реабилитации, йоги критического выравнивания, направленная на восстановление гибкости, подвижности и силы позвоночника. Подходит для тех, кто только начинает знакомиться йогой или имеет ограничения подвижности в позвоночнике.",
          duration: "1ч",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class3.jpg",
          title: "Здоровая спина",
          type: "группа",
          cost: "от 400 р",
          description:
            "Практика, основанная на йога-терапии заболеваний позвоночника. На занятиях используются положения на вытяжение и мобильность позвонков и суставов, а также силовые асаны на укрепление мышц. После практики вам захочется ходить только с прямой спиной и расправленными плечами.",
          duration: "1ч",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class4.jpg",
          title: "Интервальная йога",
          type: "группа",
          cost: "от 400 р",
          description:
            "Интенсивная практика для увеличения силы и выносливости. Несколько асан удерживаются определенное время, а между ними следует фаза активного отдыха. Практика заканчивается шавасаной с дыхательными релаксирующими техниками.",
          duration: "1ч",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class5.jpg",
          title: "Аэройога/ йога в гамаках",
          type: "группа",
          cost: "от 400 р",
          description:
            "Во время занятий гамак частично или полностью позволяет практикующему переносить вес тела в гамак, используя его как дополнительную опору или как средство для углубления практики. Новичкам он становится надежным помощником в выполнении простых асан, а для опытных практиков инструментом для достижения прогресса в сложных асанах.",
          duration: "1ч",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class6.png",
          title: "Аэройога для детей",
          type: "группа",
          cost: "от 400 р",
          description:
            "Такие практики способствуют развитию гибкости и растяжки, ваши дети не только будут чувствовать себя комфортнее, но и снизят риск травм при активных играх. Правильные позы помогают детям осознавать своё тело и учиться держать осанку. Это особенно важно в наше время, когда большинство детей проводит много времени за гаджетами.",
          duration: "50 мин",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class7.jpg",
          title: "Хатха йога",
          type: "группа",
          cost: "от 400 р",
          description:
            "Практика хатха-йоги направлена на то, чтобы соединить и сбалансировать эти две энергии для здоровья ума и тела. Статичные позы отлично прорабатывают все группы мышц и развивают силу, выносливость тела. Асаны на вытяжение помогают сделать тело мягким и эластичным. Пранаямы очищают сознание и дыхание, создают ясность ума. ",
          duration: "1ч",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class8.png",
          title: "Хатха йога для детей ",
          type: "группа",
          cost: "от 400 р",
          description:
            "Хатха-йога для детей помогает укреплять тело и развивать гармонию ума и эмоций. Простые позы делают мышцы сильнее, улучшают гибкость и осанку, а балансы помогают сосредотачиваться и быть спокойнее.",
          duration: "50 мин",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class9.jpg",
          title: "Пилатес",
          type: "группа",
          cost: "от 400 р",
          description:
            "Всемирно признанный метод упражнений, он фокусируется на контроле дыхания, силе тела и гибкости, что приводит к улучшению общей физической подготовки и благополучия. Пилатес подходит для людей всех уровней подготовки, от новичков до опытных спортсменов. ",
          duration: "1ч",
          className: "max-w-[360px]",
        },
        {
          imageSrc: "/class10.jpg",
          title: "Йога женского здоровья",
          type: "группа",
          cost: "от 400 р",
          description:
            "Женская йога — это определенная система асан с учетом особенностей женского организма: одновременно происходит развитие гибкости, подтягивание мышц и выравнивание осанки. Практика помогает легче переносить менструальный цикл, бороться с опущением органов и диастазом, уделяя внимание мышцам тазового дна.",
          duration: "1ч",
          className: "max-w-[360px]",
        },
      ];

      setCards(mockCards);
    };

    loadCards();
  }, []);

  useEffect(() => {
    // Может быть API-запрос или импорт из файла
    const loadPhotos = async () => {
      // Пример статических данных (можно заменить на API-запрос)
      const mockPhotos: CardData[] = [
        {
          imageSrc: "/studio1.jpg",
          title: "",
          type: "",
          cost: "",
          description: "",
          duration: "",
          className: "",
        },
        {
          imageSrc: "/studio2.jpg",
          title: "",
          type: "",
          cost: "",
          description: "",
          duration: "",
          className: "",
        },
        {
          imageSrc: "/studio3.jpg",
          title: "",
          type: "",
          cost: "",
          description: "",
          duration: "",
          className: "",
        },
        {
          imageSrc: "/studio4.jpg",
          title: "",
          type: "",
          cost: "",
          description: "",
          duration: "",
          className: "",
        },
        {
          imageSrc: "/studio5.jpg",
          title: "",
          type: "",
          cost: "",
          description: "",
          duration: "",
          className: "",
        },
        {
          imageSrc: "/studio6.jpg",
          title: "",
          type: "",
          cost: "",
          description: "",
          duration: "",
          className: "",
        },
        {
          imageSrc: "/studio7.jpg",
          title: "",
          type: "",
          cost: "",
          description: "",
          duration: "",
          className: "",
        },
        {
          imageSrc: "/studio8.jpg",
          title: "",
          type: "",
          cost: "",
          description: "",
          duration: "",
          className: "",
        },
      ];
      setPhotos(mockPhotos);
    };
    loadPhotos();
  }, []);
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
                src="/main.jpg"
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
              src="/main1.jpg"
              className="rounded-[20px]"
              alt="studio1"
              width={374}
              height={247}
            ></Image>
            <Image
              src="/main2.jpg"
              className="rounded-[20px]"
              alt="studio2"
              width={374}
              height={247}
            ></Image>
            <Image
              src="/main3.jpg"
              className="rounded-[20px]"
              alt="studio3"
              width={374}
              height={247}
            ></Image>
          </div>
        </div>
      </section>
      <section className="classes">
        <div className="container mx-auto max-w-[1200px] px-5 pt-[88px]">
          <div className="classes-content text-center text-[#494542] mb-[101px]">
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
            <ClassesCarousel cards={cards} />
          </div>
          <div className="flex">
            <Button
              variant="solid"
              className="flex h-[40px] w-[228px] justify-center items-center font-medium mt-[40px] mr-[40px]"
            >
              Перейти к расписанию
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
              className="flex h-[40px] w-[228px] justify-center items-center font-medium mt-[40px]"
            >
              Наши абонементы
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
                  fill="#494542"
                />
              </svg>
            </Button>
          </div>
        </div>
      </section>
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
            <ClassesCarousel cards={photos} />
          </div>
        </div>
      </section>
      <section className="goods">
        <div className="container mx-auto max-w-[1200px]">
          <div className="goods-content grid grid-cols-2 grid-rows-3 text-left text-[#494542]">
            <h2 className="font-[400px] text-[42px]">
              Вам не нужно ни о чем
              <br />
              беспокоиться, у нас есть все
              <br />
              что вам нужно
            </h2>
            {/* TODO отступы для фото */}
            <Image
              src={"/studio9.jpg"}
              width={401}
              height={463}
              alt="studio9"
              className="row-span-3 ml-[112px] rounded-[20px] align-self"
            ></Image>
            <ul className="text-[22px] mt-[35px] w-[463px] row-span-2">
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px]">
                Весь инвентарь для йоги
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Опытные преподаватели
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Внимание к особенностям учеников
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Душ и раздевалка
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Средства личной гигиены
              </li>
              <li className="border-b-[1px] pl-[20px] pt-[6px] h-[53px] align-middle">
                Фотозона
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-[1200px] text-center text-[#494542] pt-[89px]">
          <div className="content flex mb-[120px]">
            <Image
              src={"/studio10.jpg"}
              width={562}
              height={374}
              alt="studio10"
              className="mr-[19px] rounded-[20px]"
            ></Image>
            <Image
              src={"/studio11.jpg"}
              width={562}
              height={374}
              alt="studio10"
              className="rounded-[20px]"
            ></Image>
          </div>
          <h2 className="font-[400px] text-[42px]">
            Открывайте новое для себя
            <br />
            на мероприятиях в Йога Хом
          </h2>
          <p className="text-[22px] mt-[35px]">
            Йога Хом — это небольшая семья, и мы часто
            <br />
            устраиваем мероприятия в студии и на открытом
            <br />
            воздухе, проводим мастер-классы и встречи
            <br />с приглашенными спикерами.
          </p>
          <Button
            variant="solid"
            className="flex h-[40px] w-[223px] justify-center items-center mt-[40px] mx-auto"
          >
            Следить за новостями
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
      </section>
      <section className="rent">
        <div className="container mx-auto max-w-[1200px] mt-[123px]">
          <ClassesCarousel cards={photos} />

          <div className="rent-content text-[#494542] flex mt-[93px] justify-center items-center">
            <div className="w-[562px] pt-[32px]">
              <h2 className="font-[400px] text-[42px] leading-[48px]">
                Вы можете арендовать
                <br />
                100м2 нашей уютной
                <br />и светлой студии
              </h2>
              <p className="text-[22px] ml-[22px] mt-[35px] mb-[40px] leading-[30px]">
                Помещение можно арендовать для йоги,
                <br />
                танцев, фитнеса, практик, девичников,
                <br />
                женских кругов, дней рождений и фотосессий.
              </p>
              <Button
                variant="outline"
                className="flex h-[40px] w-[208px] justify-center items-center font-medium"
              >
                Арендовать студию
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
            <div className="w-[534px] h-[397] bg-[#859974] ml-[46px] text-[#EEE5DC] pt-[32px] pl-[40px] rounded-[20px]">
              <h2 className="font-[400px] text-[42px] leading-[48px]">
                В вашем
                <br />
                распоряжении будут:
              </h2>
              <ul className="text-[22px] list-disc mt-[46px] w-[447px] mx-auto">
                <li className="mb-[28px]">
                  Просторный зал вместимостью
                  <br />
                  20 человек
                </li>
                <li>
                  Оборудование для практик: коврики, гамаки, блоки, ремни,
                  гантели, блостеры
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
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
      <section className="trainers">
        <div className="container mx-auto w-[1200px] mt-[90px] text-center">
          <h2 className="font-[400px] text-[42px] leading-[48px] mb-[120px]">
            Наши преподаватели помогут
            <br />
            вам поставить технику
            <br />и аккуратно вас направят
          </h2>
          <ClassesCarousel cards={photos} />
        </div>
      </section>
      <section>
        <div className="container mx-auto w-[1200px] mt-[120px] flex justify-center">
          <div className="content text-left mx-auto">
            <h2 className="font-[400px] text-[42px] leading-[48px] mb-[35px]">
              Доверьте здоровье вашего тела
              <br />
              чутким и внимательным
              <br />
              профессионалам Йога Хом
            </h2>
            <p className="text-[22px] leading-[30px] ml-[22px] mb-[40px]">
              Даже если вы знаете о йоге только
              <br />
              из книг и никогда не пробовали
              <br />
              самостоятельно — мы заранее уточним
              <br />
              состояние вашего здоровья и предпочтения,
              <br />и уведомим об этом преподавателя
            </p>
            <div className="flex">
              <Button
                variant="solid"
                className="flex h-[40px] w-[209px] justify-center items-center font-medium mr-[42px]"
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
                className="flex h-[40px] w-[241px] justify-center items-center font-medium"
              >
                Перейти к расписанию
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
          </div>
          <div className="photo mx-auto">
            <Image
              src={"/group2.jpg"}
              width={372}
              height={404}
              alt="group2"
              className="rounded-[20px]"
            ></Image>
          </div>
        </div>
      </section>
      <section className="group-photo">
        <div className="container mx-auto w-[1200px] mt-[107px]">
          <Image
            src={"/group3.jpg"}
            height={579}
            width={1200}
            alt="group3"
          ></Image>
        </div>
      </section>
      <section className="subscription">
        <div className="container mt-[120px] mx-auto max-w-[1200px] text-center text-[#494542]">
          <h2 className="font-[400px] text-[42px] leading-[48px]">
            Разовые абонементы Йога Хом
          </h2>
          <div className="subscription-content">
            <ClassSub title="Первое пробное занятие" cost="400 ₽" />
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
