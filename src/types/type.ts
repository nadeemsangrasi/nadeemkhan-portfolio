import { StaticImageData } from "next/image";

export type HeroCarType = {
    logo: StaticImageData;
    title: string;
    color: string
}
export type TechnologyCardItemType = {
    logo: StaticImageData;
    title: string;
}
export type TechnologyCardType = {
    title: string;
    data: TechnologyCardItemType[]
}