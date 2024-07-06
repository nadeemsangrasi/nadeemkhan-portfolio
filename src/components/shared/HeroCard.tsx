import { HeroCarType } from "@/types/type";
import Image from "next/image";
import React from "react";

const HeroCard = ({ logo, title, color }: HeroCarType): React.JSX.Element => {
  return (
    <div
      className={`text-center sm:text-left w-[15%] h-[15%] sm:w-[300px] sm:h-[250px] ${color} p-4 rounded-[60px]`}
    >
      <Image
        src={logo}
        alt={title + "Logo"}
        className="mx-auto sm:mx-0 w-[30%] h-[30%] sm:w-1/2 sm:h-1/2 pt-4"
      />
      <h1 className="font-bold text-3xl px-8 py-4">{title}</h1>
    </div>
  );
};

export default HeroCard;
