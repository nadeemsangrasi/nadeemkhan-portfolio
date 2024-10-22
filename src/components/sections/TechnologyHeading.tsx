"use client";
import React from "react";
import { motion } from "framer-motion";
const TechnologyHeading = () => {
  return (
    <motion.h1
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      className="pb-10 text-4xl text-center sm:text-left sm:text-5xl break-words  text-black dark:text-primary-white"
    >
      These are the <br /> technologies I&apos;ve been using{" "}
    </motion.h1>
  );
};

export default TechnologyHeading;
