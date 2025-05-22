"use client";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="hidden md:flex text-[#494542]">
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
      {/* <svg
        width="25"
        height="9"
        viewBox="0 0 25 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="8"
          x2="24"
          y2="8"
          stroke="#494542"
          stroke-width="2"
          stroke-linecap="round"
        />
        <line
          x1="1"
          y1="1"
          x2="24"
          y2="1"
          stroke="#494542"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg> */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          <svg width="30" height="30" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#EEE5DC] p-4">
            <a className="block py-2" href="#">
              Студия
            </a>
            <a className="block py-2" href="#">
              Классы
            </a>
            <a className="block py-2" href="#">
              Преподаватели
            </a>
            <a className="block py-2" href="#">
              Мероприятия
            </a>
            <a className="block py-2" href="#">
              Массаж
            </a>
            <a className="block py-2" href="#">
              Аренда
            </a>
            <a className="block py-2" href="#">
              Контакты
            </a>
          </div>
        )}
      </div>

      <div className="header-content_last">
        <Button variant="outline" className="hidden md:flex h-[40px] w-[173px]">
          Записаться на йогу
        </Button>
      </div>
    </>
  );
}
