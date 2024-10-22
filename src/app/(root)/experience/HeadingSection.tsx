"use client";
import Button from "@/components/shared/Button";
import React from "react";
import { motion } from "framer-motion";
const HeadingSection = () => {
  const handleDownloadCV = () => {
    const cvFilePath = "/resume/NadeemKhanResume.pdf";
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "Nadeem_Sangrasi_CV.pdf";
    link.click();
  };
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
      className="w-full sm:w-1/2 mx-auto  text-center my-16"
    >
      <p className="text-gray-700 dark:text-secondary-gray font-medium text-xl md:text-2xl leading-9  ">
        &lt; Here, you can know me a little more and see my whole experience as
        a{" "}
        <span className="text-black dark:text-primary-white font-normal">
          Front-End Software Engineer.
        </span>
        /&gt;
      </p>
      <Button title="Download CV" handleDownloadCv={handleDownloadCV} />;
    </motion.div>
  );
};

export default HeadingSection;
