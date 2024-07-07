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
    "Shedcn ui",
    "Tailwind CSS",
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
            className="text-5xl md:text-7xl text-primary-white py-6 pt-8 pb-2"
          >
            Hi, I'm Nadeem
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
            className="text-xl md:text-3xl text-primary-white py-2 font-medium "
          >
            Front-end web developer with <br /> latest stack
            <span className="overflow-hidden sm:inline block">
              <FlipWords words={words} />
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
            className="text-secondary-gray font-medium text-xl md:text-[1.6rem] leading-9 md:leading-[1.8rem] md:w-[90%]"
          >
            Transforming ideas into engaging web experiences with
            <span className="text-primary-white"> Next.js</span> and
            <span className="text-primary-white"> React.js</span>
            <br />
            Ready to bring your vision to life? Let's build something
            exceptional together!
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
            <span className="text-purple px-2 md:px-6 font-medium text-lg md:inline-block block">
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
