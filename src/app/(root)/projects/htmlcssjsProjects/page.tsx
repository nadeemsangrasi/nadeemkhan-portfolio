import React from "react";
import { HtmlCssJsProjectCard } from "./HtmlCssJsProjectCard";
import Wrapper from "@/components/shared/Wrapper";
import { HtmlCssAndNextjsCardType } from "@/types/type";
import Heading from "@/components/shared/Heading";
import { fetchHtmlProjects } from "@/lib/FetchHtmlProjects";
const HtmlcssjsProjects = async (): Promise<JSX.Element> => {
  const htmlProjects = await fetchHtmlProjects();
  return (
    <Wrapper>
      <div className="my-16">
        <Heading
          text="HTML CSS JS Projects"
          color="text-heading-3"
          dir="x"
          value={100}
          delay={0.2}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {htmlProjects.map(
            (
              { title, snug, img, url }: HtmlCssAndNextjsCardType,
              index: number
            ) => (
              <HtmlCssJsProjectCard
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

export default HtmlcssjsProjects;
