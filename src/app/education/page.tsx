import React from "react";
import EducationCard from "./EducationCard";
import { eductaionCardsData } from "@/data/data";
import { EductaionCardType } from "@/types/type";

const EducationPage = (): React.JSX.Element => {
  return (
    <div className=" overflow-hidden sm:px-0 px-4 my-16 ">
      {eductaionCardsData.map(
        ({
          institution,
          degree,
          fieldOfStudy,
          startDate,
          endDate,
          location,
          description,
        }: EductaionCardType) => (
          <EducationCard
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
  );
};

export default EducationPage;
