"use client";
import { HeroCarType } from "@/types/type";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const HeroCard = ({ logo, title, color }: HeroCarType): React.JSX.Element => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.6,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      className={`text-center sm:text-left w-[15%] h-[15%] sm:w-[300px] sm:h-[250px] ${color} p-4 rounded-[60px]`}
    >
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
      >
        <Image
          src={logo}
          alt={title + "Logo"}
          height={1000}
          width={1000}
          className="mx-auto sm:mx-0 w-[30%] h-[30%] sm:w-1/2 sm:h-1/2 pt-4"
        />
      </motion.div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-black font-bold text-3xl px-8 py-4 "
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default HeroCard;
