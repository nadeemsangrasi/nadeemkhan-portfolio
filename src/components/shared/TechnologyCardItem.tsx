import { TechnologyCardItemType } from "@/types/type";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const TechnologyCardItem = ({
  logo,
  title,
}: TechnologyCardItemType): React.JSX.Element => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 0.6 },
        duration: 1,
      }}
      className="flex gap-2 items-center pb-4 justify-center sm:justify-start mx-3"
    >
      <Image
        src={logo}
        alt={title + "Logo"}
        className="w-[40px] h-[40px] bg-primary-gray rounded-full p-2  "
      />{" "}
      <motion.span
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.6 },
          duration: 1,
        }}
        className="font-semibold break-words text-md sm:text-[17px]   "
      >
        {title}
      </motion.span>
    </motion.div>
  );
};

export default TechnologyCardItem;
