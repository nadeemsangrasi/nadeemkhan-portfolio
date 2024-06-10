"use client";
import { useRef, useState } from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import nextLogo from "@/assets/logos/nextjs.svg";
import reactLogo from "@/assets/logos/reactjs.svg";
import javasctiptLogo from "@/assets/logos/javaScript.svg";

const HeroCards = () => {
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
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="mx-auto text-center sm:text-left my-4 md:my-0 w-full h-full  sm:w-[400px] md:h-[250px] p-4 rounded-3xl">
          <h4 className="text-secondary-gray text-xl py-2">1 year of</h4>
          <h1 className="text-7xl text-primary-white font-bold py-2">XP</h1>
          <h4 className="text-secondary-gray text-xl">
            with the most popular ecosystem in frontend
          </h4>
        </div>
        <div className="mx-2 md:mx-0">
          <div
            className="w-[900px] overflow-x-hidden"
            ref={cardChangeContainer}
          >
            <div className=" flex gap-6 w-[1250px] mb-4 ">
              <div className="text-center sm:text-left w-[15%] h-[15%] sm:w-[300px] sm:h-[250px] bg-card-1 p-4 rounded-[60px]">
                <Image
                  src={nextLogo}
                  alt="nextjsLogo"
                  className="mx-auto sm:mx-0 w-[30%] h-[30%] sm:w-1/2 sm:h-1/2 pt-4"
                />
                <h1 className="font-bold text-3xl px-8 py-4">Next.Js</h1>
              </div>
              <div className="text-center sm:text-left w-[15%] h-[15%] sm:w-[300px] sm:h-[250px] bg-card-2 p-4 rounded-[60px]">
                <Image
                  src={reactLogo}
                  alt="reactjsLogo"
                  className="mx-auto sm:mx-0 w-[30%] h-[30%] sm:w-1/2 sm:h-1/2 pt-4"
                />
                <h1 className="font-bold text-3xl px-8 py-4">React.Js</h1>
              </div>
              <div className="text-center sm:text-left w-[15%] h-[15%] sm:w-[300px] sm:h-[250px] bg-card-3 p-4 rounded-[60px]">
                <Image
                  src={javasctiptLogo}
                  alt="javascriptLogo"
                  className="mx-auto sm:mx-0 w-[30%] h-[30%] sm:w-1/2 sm:h-1/2 pt-4"
                />
                <h1 className="font-bold text-3xl px-8 py-4">JavaScript</h1>
              </div>
              <div className="text-center sm:text-left w-[15%] h-[15%] sm:w-[300px] sm:h-[250px] bg-card-4 p-4 rounded-[60px]">
                <Image
                  src={nextLogo}
                  alt="nextjsLogo"
                  className="mx-auto sm:mx-0 w-[30%] h-[30%] sm:w-1/2 sm:h-1/2 pt-4"
                />
                <h1 className="font-bold text-3xl px-8 py-4">Next.Js</h1>
              </div>
            </div>
          </div>
          <div className="md:justify-normal justify-center py-2 md:py-0 flex gap-2">
            <div
              className={` h-[20px] ${
                card == "card1"
                  ? "w-[100px] bg-primary-white "
                  : "w-[30px] bg-secondary-gray"
              } rounded-full transition-all ease 0.5s duration-500`}
              onClick={() => {
                setCard("card1");
                navigation("left");
              }}
            ></div>
            <div
              className={` h-[20px] ${
                card == "card2"
                  ? "w-[100px] bg-primary-white "
                  : "w-[30px] bg-secondary-gray"
              } rounded-full transition-all ease 0.5s duration-500`}
              onClick={() => {
                setCard("card2");
                navigation("right");
              }}
            ></div>
            {/* <div
              className={`h-[20px] ${
                card == "card3"
                  ? "w-[100px] bg-primary-white "
                  : "w-[30px] bg-secondary-gray"
              } rounded-full transition-all ease 0.5s duration-500`}
              onClick={() => {
                setCard("card3");
                navigation("right");
              }}
            ></div>
            <div
              className={` h-[20px] ${
                card == "card4"
                  ? "w-[100px] bg-primary-white "
                  : "w-[30px] bg-secondary-gray"
              } rounded-full transition-all ease 0.5s duration-500`}
              onClick={() => {
                setCard("card4");
                navigation("right");
              }}
            ></div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroCards;
