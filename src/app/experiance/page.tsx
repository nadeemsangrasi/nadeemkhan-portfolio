"use client";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import ExperianceCard from "./ExperianceCard";
import { experienceCardsData } from "@/data/data";
import { ExperianceCardType } from "@/types/type";
import { motion } from "framer-motion";
const ExperiancePage = (): React.JSX.Element => {
  const handleDownloadCV = () => {
    const cvFilePath = "/resume/NadeemKhanResume.pdf";
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "Nadeem_Sangrasi_CV.pdf";
    link.click();
  };
  return (
    <Wrapper>
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
        <p className="text-secondary-gray font-medium text-xl md:text-2xl leading-9  ">
          &lt; Here, you can know me a little more and see my whole experience
          as a{" "}
          <span className="text-primary-white font-normal">
            Front-End Software Engineer.
          </span>
          /&gt;
        </p>
        <Button title="Download CV" handleDownloadCv={handleDownloadCV} />
      </motion.div>
      <div>
        {experienceCardsData.map(
          (
            {
              domain,
              startDate,
              endDate,
              place,
              companyName,
              detailPara1,
              detailPara2,
            }: ExperianceCardType,
            index: number
          ) => (
            <ExperianceCard
              key={index}
              domain={domain}
              startDate={startDate}
              endDate={endDate}
              place={place}
              companyName={companyName}
              detailPara1={detailPara1}
              detailPara2={detailPara2}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default ExperiancePage;
