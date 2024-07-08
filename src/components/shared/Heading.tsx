"use client";
import { HeadingDataType } from "@/types/type";
import { motion } from "framer-motion";

const Heading = ({ text, color, dir, value, delay }: HeadingDataType) => {
  return dir === "x" ? (
    <motion.h1
      initial={{ x: value, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: delay,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      className={`${color} break-words text-5xl sm:text-7xl font-bold pb-10 text-center`}
    >
      {text}
    </motion.h1>
  ) : (
    <motion.h1
      initial={{ y: value, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: delay,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      className={`${color} break-words text-5xl sm:text-7xl font-bold pb-10 text-center`}
    >
      {text}
    </motion.h1>
  );
};

export default Heading;
