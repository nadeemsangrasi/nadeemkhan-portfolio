import React from "react";
import { NextProjectCard } from "./NextProjctCard";
import { nextProjectData } from "@/data/data";
import Wrapper from "@/components/shared/Wrapper";

const NextjsProjects = () => {
  return (
    <Wrapper>
      <h1 className="text-heading-3 break-words text-5xl sm:text-7xl font-bold text-center pt-8">
        Nextjs Projects
      </h1>
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
    </Wrapper>
  );
};

export default NextjsProjects;
