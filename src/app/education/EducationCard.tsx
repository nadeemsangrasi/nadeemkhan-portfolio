"use client";
import { EductaionCardType } from "@/types/type";
import dayjs from "dayjs";
import React from "react";
import { motion } from "framer-motion";
const EducationCard = ({
  institution,
  degree,
  fieldOfStudy,
  startDate,
  endDate,
  location,
  description,
}: EductaionCardType): React.JSX.Element => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      className="w-full mx-auto my-8 sm:w-[70%] border-l border-r border-t border-b  p-8 rounded-3xl    sm:p-6  dark:bg-zinc-900     border-secondary-gray  hover:hue-rotate-90  duration-[800ms]  hover:duration-[1500ms]"
    >
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-purple text-xl pb-4 pt-5 sm:pt-0"
      >
        Institution <span className="text-primary-white">: {institution}</span>
      </motion.h2>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-purple text-xl pb-4 pt-5 sm:pt-0"
      >
        Field of study{" "}
        <span className="text-primary-white">: {fieldOfStudy}</span>
      </motion.h2>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-purple text-xl pb-4 pt-5 sm:pt-0"
      >
        start{" "}
        <span className="text-primary-white">
          : {dayjs(startDate).format("MMM D, YYYY")}
        </span>
      </motion.h2>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-purple text-xl pb-4 pt-5 sm:pt-0"
      >
        end{" "}
        {dayjs(endDate).format("MMM D, YYYY") == "Invalid Date" ? (
          <span className="text-primary-white">: Present</span>
        ) : (
          <span className="text-primary-white">
            : {dayjs(endDate).format("MMM D, YYYY")}
          </span>
        )}
      </motion.h2>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.6,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-purple text-xl pb-4 pt-5 sm:pt-0"
      >
        Location <span className="text-primary-white">: {location}</span>
      </motion.h2>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-secondary-white font-light  text-[1rem] sm:text-xl pb-4"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default EducationCard;
