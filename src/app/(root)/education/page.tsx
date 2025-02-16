import React from "react";
import EducationCard from "./EducationCard";
import { EductaionCardType } from "@/types/type";
import { fetchEducation } from "@/lib/FetchEducation";
import Wrapper from "@/components/shared/Wrapper";

const EducationPage = async (): Promise<JSX.Element> => {
  const education = await fetchEducation();
  return (
    <Wrapper>
      <div className=" overflow-hidden sm:px-0 px-4 my-14 ">
        {education.map(
          (
            {
              institution,
              degree,
              fieldOfStudy,
              startDate,
              endDate,
              description,
              location,
            }: EductaionCardType,
            index: number
          ): JSX.Element => (
            <EducationCard
              key={index}
              institution={institution}
              degree={degree}
              fieldOfStudy={fieldOfStudy}
              startDate={startDate}
              endDate={endDate}
              location={location}
              description={description}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default EducationPage;
