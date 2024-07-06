import React from "react";
import { HtmlCssJsProjectCard } from "./HtmlCssJsProjectCard";
import Wrapper from "@/components/shared/Wrapper";
import { htmlCssProjectData } from "@/data/data";

const HtmlcssjsProjects = () => {
  return (
    <Wrapper>
      <h1 className="text-heading-3 break-words text-5xl sm:text-7xl font-bold text-center pt-8">
        HTML CSS JS Projects
      </h1>
      <div className="flex flex-wrap space-x-4 gap-4 items-center justify-center">
        {htmlCssProjectData.map(({ title, snug, img, url }, index: number) => (
          <HtmlCssJsProjectCard
            key={index}
            title={title}
            snug={snug}
            img={img}
            url={url}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default HtmlcssjsProjects;
