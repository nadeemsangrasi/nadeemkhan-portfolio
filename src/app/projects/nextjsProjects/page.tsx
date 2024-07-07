import React from "react";
import { NextProjectCard } from "./NextProjctCard";
import { nextProjectData } from "@/data/data";
import Wrapper from "@/components/shared/Wrapper";
import { HtmlCssAndNextjsCardType } from "@/types/type";
import Heading from "@/components/shared/Heading";
const NextjsProjects = (): JSX.Element => {
  return (
    <Wrapper>
      <div className="my-16">
        <Heading
          text="Nextjs Projects"
          color="text-heading-3"
          dir="y"
          value={100}
          delay={0.2}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 -mt-8">
          {nextProjectData.map(
            (
              { title, snug, img, url }: HtmlCssAndNextjsCardType,
              index: number
            ) => (
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
      </div>
    </Wrapper>
  );
};

export default NextjsProjects;
