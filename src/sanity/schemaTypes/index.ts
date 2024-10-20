import { type SchemaTypeDefinition } from "sanity";
import { NextjsProject } from "../NextjsProject";
import { HtmlProject } from "../HtmlCssJsProject";
import { Experience } from "../Experience";
import { Education } from "../Education";
import { Technology } from "../Technology";
import { FeaturedTechnology } from "../FeaturedTechnology";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    NextjsProject,
    HtmlProject,
    Experience,
    Education,
    Technology,
    FeaturedTechnology,
  ],
};
