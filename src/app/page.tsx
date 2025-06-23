import { getSectionData } from "@/lib/content";
import Main from "./sections/main";
import Intro from "./sections/intro";
import Classes from "./sections/classes";
import Studio from "./sections/studio";
import Goods from "./sections/goods";
import Rent from "./sections/rent";
import GroupPhoto from "./sections/groupPhoto";
import TrainersWrapper from "./sections/trainers";
import Health from "./sections/health";
import Subscriptions from "./sections/subscriptions";
import Sertificates from "./sections/sertificates";
import Meditation from "./sections/meditation";
import Footer from "./sections/footer";

export default async function Home() {
  // Загружаем данные на сервере
  const classesData = getSectionData("classes");
  const studioData = getSectionData("studio");
  const eventsData = getSectionData("events");
  const trainersData = getSectionData("trainers");
  const singleClassesData = getSectionData("single-classes");
  const subscriptionsData = getSectionData("subscriptions");

  return (
    <>
      <Main />
      <Intro />
      <Classes classesData={classesData} />
      <Studio studioData={studioData} />
      <Goods eventsData={eventsData} />
      <Rent />
      <GroupPhoto />
      <TrainersWrapper serverData={trainersData} />
      <Health />
      <Subscriptions
        singleClassesData={singleClassesData}
        subscriptionsData={subscriptionsData}
      />
      <Sertificates />
      <Meditation />
      <Footer />
    </>
  );
}
