"use client";
import React from "react";
import { TechnologyCardItemType, TechnologyCardType } from "@/types/type";
import TechnologyCardItem from "./TechnologyCardItem";
import { BackgroundGradient } from "../ui/background-gradient";
import { motion } from "framer-motion";
const TechnologyCard = ({
  title,
  data,
}: TechnologyCardType): React.JSX.Element => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.6 },
        duration: 1,
      }}
      className="mx-auto md:mx-0"
    >
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900 w-full sm:w-fit   border-secondary-gray  hover:hue-rotate-90  duration-800ms  hover:duration-1500ms ">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            duration: 1,
          }}
          className="text-black dark:text-white  font-bold  break-words text-sm sm:text-[1rem] pb-2"
        >
          {title}
        </motion.h1>
        {data.map(({ logo, title }: TechnologyCardItemType) => (
          <TechnologyCardItem key={title} logo={logo} title={title} />
        ))}
      </BackgroundGradient>
    </motion.div>
  );
};

export default TechnologyCard;
