import { StaticImageData } from "next/image";

export type HeroCarType = {
  logo: any;
  title: string;
  color: string;
};
export type TechnologyCardItemType = {
  logo: StaticImageData;
  title: string;
};
export type TechnologyCardType = {
  title: string;
  data: TechnologyCardItemType[];
};

export type ExperianceCardType = {
  domain: string;
  startDate: string;
  endDate: string;
  place: string;
  companyName: string;
  detailPara1: string;
  detailPara2: string;
};

export type EductaionCardType = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
};

export type HtmlCssAndNextjsCardType = {
  title: string;
  snug: string;
  img: any;
  url: string;
};

export type HeadingDataType = {
  text: string;
  color: string;
  dir: string;
  value: number;
  delay: number;
};
