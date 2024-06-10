import React from "react";
import EducationCard from "./EducationCard";

const EducationPage = (): React.JSX.Element => {
  return (
    <div className=" overflow-hidden sm:px-0 px-4   text-center my-16 ">
      <EducationCard />
      <EducationCard />
      <EducationCard />
    </div>
  );
};

export default EducationPage;
