"use client";
import React from "react";
import { NextProjectCard } from "./NextProjctCard";
import { nextProjectData } from "@/data/data";
import Wrapper from "@/components/shared/Wrapper";
import { motion } from "framer-motion";
const NextjsProjects = () => {
  return (
    <Wrapper>
      <div className="my-16">
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
          className=" text-heading-3 break-words text-5xl sm:text-7xl font-bold text-center pt-8"
        >
          Nextjs Projects
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 -mt-8">
          {nextProjectData.map(
            ({ title, snug, img, url }: any, index: number) => (
              <NextProjectCard
                key={index}
                title={title}
                snug={snug}
                img={img}
                url={url}
              />
            )
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default NextjsProjects;
