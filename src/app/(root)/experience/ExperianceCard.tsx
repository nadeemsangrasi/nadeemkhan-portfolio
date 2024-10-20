"use client";
import { ExperianceCardType } from "@/types/type";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
const ExperianceCard = ({
  domain,
  startDate,
  endDate,
  place,
  companyName,
  detailPara1,
  detailPara2,
}: ExperianceCardType): React.JSX.Element => {
  return (
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
      className="md:flex w-full sm:w-[90%] mx-auto gap-4 my-16 border bg-expCard p-6 sm:p-14 rounded-xl"
    >
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="w-full sm:w-fit md:w-1/3"
      >
        <h1 className="text-primary-white text-lg sm:text-2xl">{domain}</h1>
        <h2 className="text-purple text-[1rem] sm:text-xl">
          {" "}
          <Link href={"#"}></Link>{" "}
        </h2>
        <p className="text-secondary-white font-light  text-[1rem] sm:text-xl md:text-lg">
          {dayjs(startDate).format("MMM D, YYYY")} .{" "}
          {dayjs(endDate).format("MMM D, YYYY") == "Invalid Date"
            ? "Present"
            : dayjs(endDate).format("MMM D, YYYY")}{" "}
          <br /> {place}
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="w-full sm:w-[67%]"
      >
        <h2 className="text-purple text-xl sm:text-2xl pb-4 pt-5 sm:pt-0">
          {companyName}
        </h2>
        <p className="text-secondary-white font-light  text-[1rem] sm:text-xl  pb-4">
          {detailPara1}
        </p>
        <p className="text-secondary-white font-light  text-[1rem] sm:text-xl  pb-4">
          {detailPara2}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ExperianceCard;
