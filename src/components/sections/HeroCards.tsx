"use client";
import { FC, useEffect, useRef, useState } from "react";
import Wrapper from "../shared/Wrapper";
import { HeroCarType } from "@/types/type";
import HeroCard from "../shared/HeroCard";
import { motion } from "framer-motion";
const HeroCards: FC<{ cardsData: HeroCarType[] }> = ({
  cardsData,
}): React.JSX.Element => {
  const [card, setCard] = useState<"card1" | "card2" | "card3" | "card4">(
    "card1"
  );

  const cardChangeContainer = useRef<any>();
  const navigation = (dir: string) => {
    const container = cardChangeContainer.current;
    const scrollAmount =
      dir === "left"
        ? container?.scrollLeft - (container.offsetWidth + 20)
        : container?.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const container = cardChangeContainer.current;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (container) {
        container.scrollLeft += event.deltaY;
      }
    };

    if (container) {
      container.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row gap-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="mx-auto text-center sm:text-left my-4 md:my-0 w-full h-full  sm:w-[400px] md:h-[250px] p-4 rounded-3xl"
        >
          <h4 className="text-gray-700 dark:text-secondary-gray text-xl py-2">
            1 year of
          </h4>
          <h1 className="text-7xl text-black dark:text-primary-white font-bold py-2">
            XP
          </h1>
          <h4 className="text-gray-700 dark:text-secondary-gray text-xl">
            with the most popular ecosystem in frontend
          </h4>
        </motion.div>
        <div className=" mx-2 md:mx-0">
          <div
            className=" w-[900px] overflow-x-scroll overflow-y-hidden scrollbar-hide"
            ref={cardChangeContainer}
          >
            <div className="h-fit flex gap-6 w-[1680px] sm:w-[1520px]   lg:w-[1250px] mb-4 ">
              {cardsData.map(({ logo, title, color }: HeroCarType) => (
                <HeroCard key={title} logo={logo} title={title} color={color} />
              ))}
            </div>
          </div>
          <div className="md:justify-normal justify-center py-2 md:py-0 flex gap-2">
            <div
              className={` h-[20px] ${
                card == "card1"
                  ? "w-[100px] bg-black dark:bg-primary-white "
                  : "w-[30px] bg-gray-700 dark:bg-secondary-gray"
              } rounded-full transition-all ease 0.5s duration-500`}
              onClick={() => {
                setCard("card1");
                navigation("left");
              }}
            ></div>
            <div
              className={` h-[20px] ${
                card == "card2"
                  ? "w-[100px] bg-black dark:bg-primary-white "
                  : "w-[30px]  bg-gray-700 dark:bg-secondary-gray"
              } rounded-full transition-all ease 0.5s duration-500`}
              onClick={() => {
                setCard("card2");
                navigation("right");
              }}
            ></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroCards;
