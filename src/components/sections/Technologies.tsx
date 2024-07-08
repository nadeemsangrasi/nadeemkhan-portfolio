"use client";
import Wrapper from "../shared/Wrapper";
import TechnologyCard from "../shared/TechnologyCard";
import { technologyCardData } from "@/data/data";
import { TechnologyCardType } from "@/types/type";
import { motion } from "framer-motion";
import React from "react";

const Technologies = (): React.JSX.Element => {
  return (
    <Wrapper>
      <div className="my-12">
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
          className="pb-10 text-4xl text-center sm:text-left sm:text-5xl break-words  text-primary-white"
        >
          These are the <br /> technologies I&apos;ve been using{" "}
        </motion.h1>
        <div className="py-8 text-primary-white text-center flex flex-wrap gap-8 justify-between">
          {technologyCardData.map(
            ({ title, data }: TechnologyCardType, index: number) => (
              <TechnologyCard key={index} title={title} data={data} />
            )
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Technologies;
