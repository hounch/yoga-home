"use client";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
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
    </>
  );
}
