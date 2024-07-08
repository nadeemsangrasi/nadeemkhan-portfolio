import { EductaionCardType, ExperianceCardType, HeroCarType, HtmlCssAndNextjsCardType, TechnologyCardType, HeadingDataType } from "@/types/type";
import nextLogo from "@/assets/logos/nextjs.svg";
import vercelLogo from "@/assets/logos/vercel.svg"
import githubLogo from "@/assets/logos/github.svg"
import whiteNextjsLogo from "@/assets/logos/whiteNextjs.svg"
import reactLogo from "@/assets/logos/reactjs.svg";
import reduxLogo from "@/assets/logos/redux.svg"
import typescriptLogo from "@/assets/logos/typeScript.svg"
import javascriptLogo from "@/assets/logos/javaScript.svg";
import pythonLogo from "@/assets/logos/python.svg"
import cssLogo from "@/assets/logos/css3.svg"
import tailwindcssLogo from "@/assets/logos/tailwindcss.svg"
import sassLogo from "@/assets/logos/sass.svg"
import contentfullLogo from "@/assets/logos/contentful.svg"
import sanityLogo from "@/assets/logos/sanity.svg"
import passManageImg from "@/assets/nextProjectsImages/passmanage.png"
import carShocaseImg from "@/assets/nextProjectsImages/carShocase.png"
import penaverseCloneImg from "@/assets/nextProjectsImages/penaverseCloneImg.png"
import photoAlbumImg from "@/assets/nextProjectsImages/photoAlbumGalleryImg.png"
import quizAppImg from "@/assets/nextProjectsImages/quizAppImg.png"
import ecomerceImg from "@/assets/nextProjectsImages/ecomerceImg.png"
import spotifyImg from "@/assets/HtmlCSSProjectsImages/spotify.png"
import portfolioImg from "@/assets/HtmlCSSProjectsImages/portfolio.png"
import animatedImg from "@/assets/HtmlCSSProjectsImages/animatedSite.png"
import twoGoodImg from "@/assets/HtmlCSSProjectsImages/twoGoodClone.png"
import landingPageImg from "@/assets/HtmlCSSProjectsImages/landingPage.png"

export const heroCardData: HeroCarType[] = [
    { logo: nextLogo, title: "Next.Js", color: "bg-card-1" },
    { logo: typescriptLogo, title: "TypeScript", color: "bg-card-2" },
    { logo: reactLogo, title: "React.Js", color: "bg-card-3" },
    { logo: javascriptLogo, title: "JavaScript", color: "bg-card-4" },
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

export const experienceCardsData: ExperianceCardType[] = [
    {
        domain: "Cloud Computing & Generative AI",
        startDate: "January 2023",
        endDate: "Present",
        place: "Karachi, Pakistan",
        companyName: "Senior Student at Governor Sindh Initiative for Certified Cloud Applied Generative AI Engineers",
        detailPara1: "As a Senior Student, I play a crucial role in supporting both students and faculty within the Governor Sindh Initiative for Certified Cloud Applied Generative AI Engineers. My responsibilities include solving queries from fellow students, providing guidance and solutions to problems related to cloud computing and generative AI, and helping new students navigate the program.",
        detailPara2: "In addition, I assist teachers and mentors in organizing and delivering coursework, ensuring smooth and efficient operations. I actively participate in and contribute to advanced projects, applying my skills to real-world challenges and fostering an environment of collaborative learning. My dedication and hard work have been key factors in my selection for this role, reflecting my commitment to excellence and my passion for advancing in the field of cloud computing and AI."
    },
    {
        domain: "Python Programming",
        startDate: "April 2024",
        endDate: "May 2024",
        place: "Virtual",
        companyName: "CodSoft",
        detailPara1: "During a 1-month virtual internship with CodSoft, I developed and honed my Python programming skills through practical, real-world projects. This internship allowed me to apply theoretical knowledge to solve tangible problems, resulting in the completion of five significant projects.",
        detailPara2: "The projects included a To-Do List application, a Calculator, a Password Generator, a Rock Paper Scissors game, and a Contact Management System. I added extra efforts in each project by enhancing features and optimizing performance. This experience strengthened my programming skills, problem-solving abilities, and project management, preparing me for future challenges in software development."
    }
]

export const eductaionCardsData: EductaionCardType[] = [
    {
        institution: "Shah Abdul Latif Degree collage Mirpurkhas Sindh",
        degree: "collage",
        fieldOfStudy: "Engineering",
        startDate: "Aug 2024",
        endDate: "Present",
        location: "Mirpurkhas, Pakistan",
        description: "Currently in the first year, studying physics, chemistry, and mathematics etc. Course designed by the Government of Sindh Education Department"
    },

    {
        institution: "Governor Sindh",
        degree: "Certified Cloud Applied Generative AI Engineer",
        fieldOfStudy: "Generative AI and Cloud Computing",
        startDate: "Feb 2024",
        endDate: "Present",
        location: "Karachi, Pakistan",
        description: "Pursuing a certification program focused on applied generative AI and cloud engineering. Gaining hands-on experience with AI models, cloud platforms, and real-world applications of generative AI technologies."
    },
]



export const nextProjectData: HtmlCssAndNextjsCardType[] = [
    {
        title: "Car Showcase App",
        snug: "Interactive 3D car models with detailed specs, built with Next.js, Redux, and Sass.",
        img: carShocaseImg,
        url: "https://car-showcase-app-lac.vercel.app/"
    },
    {
        title: "Penaverse Dao Clone",
        snug: "Decentralized autonomous organization platform built with Next.js and Tailwind CSS.",
        img: penaverseCloneImg,
        url: "https://penaverse-dao-clone.vercel.app/"
    },
    {
        title: "Photo Album Gallery",
        snug: "Showcase stunning photo albums with Cloudinary, Next.js, and Tailwind CSS.",
        img: photoAlbumImg,
        url: "https://nadeem-photos-gallery.vercel.app/"
    },
    {
        title: "Ultimate Quiz App",
        snug: "Engaging quizzes with a sleek interface, built with Next.js and Tailwind CSS.",
        img: quizAppImg,
        url: "https://nadeem-quiz-app.vercel.app/"
    },
    {
        title: "Ecommerce App",
        snug: "Seamless shopping experience with Next.js, Redux, and Tailwind CSS for fast, stylish performance.",
        img: ecomerceImg,
        url: "https://cart-system-alpha.vercel.app/"
    },
    {
        title: "Password Manager App",
        snug: "Securely manage passwords with ease, crafted using Next.js and styled with Tailwind CSS.",
        img: passManageImg,
        url: "https://password-manager-one-kappa.vercel.app/"
    },
]


export const htmlCssProjectData: HtmlCssAndNextjsCardType[] = [
    {
        title: "Spotify Clone",
        snug: "Stream and discover your favorite music with ease on our Spotify clone",
        img: spotifyImg,
        url: "https://nadeemsangrasi.github.io/spotify_clone/"
    },
    {
        title: "Portfolio Site",
        snug: "Showcasing my work, skills, and passion for creative excellence.",
        img: portfolioImg,
        url: "https://nadeemsangrasi.github.io/Portfolio-Site/"
    },
    {
        title: "Animated Portfolio",
        snug: "Showcase your creativity and skills with our dynamic animated portfolio site.",
        img: animatedImg,
        url: "https://nadeemsangrasi.github.io/Animated-Portfolio-Site/"
    },
    {
        title: "Two Good Clone",
        snug: "Experience the ultimate deal-hunting with our Too Good to Go clone",
        img: twoGoodImg,
        url: "https://nadeemsangrasi.github.io/Two-Good-Site-clone/"
    },
    {
        title: "Animated Landing Page",
        snug: "Experience music like never before with our dynamic and engaging animated landing page",
        img: landingPageImg,
        url: "https://nadeemsangrasi.github.io/Animated-Landing-Page/"
    },
]
export const headingData: HeadingDataType[] = [
    {
        text: "TypeScript",
        color: "text-heading-1",
        dir: "x",
        value: -100,
        delay: 0.4,
    },
    {
        text: "Next.js",
        color: "text-heading-2",
        dir: "x",
        value: 100,
        delay: 0.6,
    },
    {
        text: "React.js",
        color: "text-heading-3",
        dir: "x",
        value: -100,
        delay: 0.8,
    },
];