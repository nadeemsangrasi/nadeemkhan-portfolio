"use client";
import { EductaionCardType } from "@/types/type";
import dayjs from "dayjs";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { BackgroundGradient } from "@/components/ui/background-gradient";
const EducationCard = ({
  institution,
  degree,
  fieldOfStudy,
  startDate,
  endDate,
  location,
  description,
}: EductaionCardType): React.JSX.Element => {
  return (
    <div className="w-full mx-auto my-8 sm:w-[70%] border-l border-r border-t border-b  p-8 rounded-3xl    sm:p-6  dark:bg-zinc-900     border-secondary-gray  hover:hue-rotate-90  duration-[800ms]  hover:duration-[1500ms]">
      <h2 className="text-purple text-xl pb-4 pt-5 sm:pt-0">
        Institution <span className="text-primary-white">: {institution}</span>
      </h2>
      <h2 className="text-purple text-xl pb-4 pt-5 sm:pt-0">
        Field of study{" "}
        <span className="text-primary-white">: {fieldOfStudy}</span>
      </h2>
      <h2 className="text-purple text-xl pb-4 pt-5 sm:pt-0">
        start{" "}
        <span className="text-primary-white">
          : {dayjs(startDate).format("MMM D, YYYY")}
        </span>
      </h2>
      <h2 className="text-purple text-xl pb-4 pt-5 sm:pt-0">
        end{" "}
        {dayjs(endDate).format("MMM D, YYYY") == "Invalid Date" ? (
          <span className="text-primary-white">: Present</span>
        ) : (
          <span className="text-primary-white">
            : {dayjs(endDate).format("MMM D, YYYY")}
          </span>
        )}
      </h2>
      <h2 className="text-purple text-xl pb-4 pt-5 sm:pt-0">
        Location <span className="text-primary-white">: {location}</span>
      </h2>
      <p className="text-secondary-gray font-light  text-[1rem] sm:text-lg pb-4">
        {description}
      </p>
    </div>
  );
};

export default EducationCard;