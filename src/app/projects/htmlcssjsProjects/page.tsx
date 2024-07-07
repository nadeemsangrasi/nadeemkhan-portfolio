"use client";
import React from "react";
import { HtmlCssJsProjectCard } from "./HtmlCssJsProjectCard";
import Wrapper from "@/components/shared/Wrapper";
import { htmlCssProjectData } from "@/data/data";
import { motion } from "framer-motion";
const HtmlcssjsProjects = () => {
  return (
    <Wrapper>
      <div className="my-16">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=" text-heading-3 break-words text-5xl sm:text-7xl font-bold text-center pt-8"
        >
          HTML CSS JS Projects
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {htmlCssProjectData.map(
            ({ title, snug, img, url }, index: number) => (
              <HtmlCssJsProjectCard
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

export default HtmlcssjsProjects;
