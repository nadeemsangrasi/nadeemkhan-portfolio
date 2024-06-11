import { HeroCarType, TechnologyCardType } from "@/types/type";
import nextLogo from "@/assets/logos/nextjs.svg";
import vercelLogo from "@/assets/logos/vercel.svg"
import githubLogo from "@/assets/logos/github.svg"
import whiteNextjsLogo from "@/assets/logos/whiteNextjs.svg"
import reactLogo from "@/assets/logos/reactjs.svg";
import reduxLogo from "@/assets/logos/redux.svg"
import typescriptLogo from "@/assets/logos/typescript.svg";
import javascriptLogo from "@/assets/logos/javaScript.svg";
import pythonLogo from "@/assets/logos/python.svg"
import cssLogo from "@/assets/logos/css3.svg"
import tailwindcssLogo from "@/assets/logos/tailwindcss.svg"
import sassLogo from "@/assets/logos/sass.svg"
import contentfullLogo from "@/assets/logos/contentful.svg"
import sanityLogo from "@/assets/logos/sanity.svg"
export const heroCardData: HeroCarType[] = [
    { logo: nextLogo, title: "Next.Js", color: "card-1" },
    { logo: typescriptLogo, title: "TypeScript", color: "card-2" },
    { logo: reactLogo, title: "React.Js", color: "card-3" },
    { logo: javascriptLogo, title: "JavaScript", color: "card-3" },
]


export const technologyCardData: TechnologyCardType[] = [
    {
        title: "Deployment", data: [
            { logo: vercelLogo, title: "Vercel", },
            { logo: githubLogo, title: "Github", }
        ],
    },
    {
        title: "Core Front-End", data: [
            { logo: whiteNextjsLogo, title: "Next Js", },
            { logo: reactLogo, title: "React Js", },
            { logo: reduxLogo, title: "Redux JS", }
        ],
    },
    {
        title: "Languages", data: [
            { logo: typescriptLogo, title: "TypeScript", },
            { logo: javascriptLogo, title: "JavaScript", },
            { logo: pythonLogo, title: "Python", }
        ],
    },
    {
        title: "Front-End Styles", data: [
            { logo: cssLogo, title: "CSS3", },
            { logo: tailwindcssLogo, title: "Tailwind CSS", },
            { logo: sassLogo, title: "Sass", }
        ],
    },
    {
        title: "Headless CMS", data: [
            { logo: contentfullLogo, title: "Contentfull", },
            { logo: sanityLogo, title: "Sanity", },

        ],
    },
]