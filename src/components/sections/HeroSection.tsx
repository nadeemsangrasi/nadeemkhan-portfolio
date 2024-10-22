"use client";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import myImage from "@/assets/images/myImage.png";
import Button from "../shared/Button";
import { FlipWords } from "../ui/flip-words";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = (): React.JSX.Element => {
  const words: string[] = [
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
  ];

  const handleDownloadCV = (): void => {
    const cvFilePath = "/resume/NadeemKhanResume.pdf";
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "Nadeem_Sangrasi_CV.pdf";
    link.click();
  };

  return (
    <Wrapper>
      <div className="md:my-14 md:mx-8 flex flex-col-reverse md:flex-row items-center justify-between w-full">
        <div className="w-full md:w-1/2 py-6 md:py-0 mx-auto text-center md:text-left">
          <motion.h1
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-5xl md:text-7xl text-black dark:text-primary-white py-6 pt-8 pb-2 dark:font-normal font-medium"
          >
            Hi, I&apos;m Nadeem
          </motion.h1>
          <motion.h2
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl md:text-3xl text-black dark:text-primary-white py-2 font-medium"
          >
            Full-stack developer with latest <br /> Tech Stack
            <span className="overflow-hidden sm:inline block">
              <FlipWords
                words={words}
                className="text-heading-3 dark:text-purple font-medium dark:font-normal"
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ x: -70, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-gray-700 dark:text-secondary-gray font-medium text-xl md:text-[1.6rem] leading-9 md:leading-[1.8rem] md:w-[90%]"
          >
            Building dynamic web applications with
            <span className="text-black dark:text-primary-white"> Next.js</span>
            ,
            <span className="text-black dark:text-primary-white"> Node.js</span>
            , and
            <span className="text-black dark:text-primary-white">
              {" "}
              PostgreSQL
            </span>
            .
            <br />
            Let&apos;s turn your ideas into scalable solutions!
          </motion.p>
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.8 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Button title="Download CV" handleDownloadCv={handleDownloadCV} />
            <span className="text-heading-3 dark:text-purple font-medium  px-2 md:px-6 text-lg md:inline-block block">
              <Link href={"/experience"}>see experiences</Link>
            </span>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="w-full md:w-1/2 lg:w-[38%]"
        >
          <Image priority src={myImage} alt="img" className="w-full h-full" />
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
