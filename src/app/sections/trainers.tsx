"use client";
import { Carousel } from "../ui/carousel";

interface TrainersProps {
<<<<<<< Updated upstream
	data: any[];
}

export default function Trainers({ data }: TrainersProps) {
	return (
		<>
			<section className="trainers">
				<div className="container mx-auto w-[1200px] mt-[90px] text-center">
					<h2 className="font-[400px] text-[42px] leading-[114%] mb-[120px]">
						Наши преподаватели помогут
						<br />
						вам поставить технику
						<br />и аккуратно вас направят
					</h2>
					<Carousel type="Card4" data={data} />
				</div>
			</section>
		</>
	);
=======
  data: Array<Record<string, unknown>>;
}

export default function Trainers({ data }: TrainersProps) {
  return (
    <>
      <section className="trainers" id="trainers">
        <div className="mx-auto max-w-full md:lg:max-w-[1200px] mt-[90px] text-left md:text-center">
          <h2 className="font-[400px] text-[42px] leading-[114%] mb-[120px]">
            Наши{" "}
            <span className="inline md:hidden lg:hidden">внимательные </span>
            преподаватели помогут
            <br className="hidden md:inline lg:inline" /> вам поставить технику
            <br className="hidden md:inline lg:inline" /> и аккуратно вас
            направят
          </h2>
          <Carousel type="Card4" data={data} />
        </div>
      </section>
    </>
  );
>>>>>>> Stashed changes
}
