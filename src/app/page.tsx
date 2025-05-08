"use client";

import Main from "./sections/main";
import Intro from "./sections/intro";
import Classes from "./sections/classes";
import Studio from "./sections/studio";
import Goods from "./sections/goods";
import Rent from "./sections/rent";
import GroupPhoto from "./sections/groupPhoto";
import Trainers from "./sections/trainers";
import Health from "./sections/health";
import Subscriptions from "./sections/subscriptions";
import Sertificates from "./sections/sertificates";

export default function Home() {
  return (
    <>
      <Main />
      <Intro />
      <Classes />
      <Studio />
      <Goods />
      <Rent />
      <GroupPhoto />
      <Trainers />
      <Health />
      <Subscriptions />
      <Sertificates />
    </>
  );
}
