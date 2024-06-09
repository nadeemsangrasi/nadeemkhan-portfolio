"use client";
import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import { useState } from "react";
import Image from "next/image";
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import mailIcon from "@/assets/icons/mail.svg";

const Header = () => {
  const [color, setColor] = useState<"home" | "education" | "experiance">(
    "home"
  );
  return (
    <Wrapper>
      <div className="w-full md:w-1/2 bg-secondary-black overflow-hidden text-secondary-white mx-auto rounded-full h-14 flex items-center justify-center gap-4">
        <div className="pages">
          <ul className="flex sm:gap-6 gap-2">
            <li
              className={`sm:text-xl font-medium hover:underline ${
                color === "home"
                  ? "transition all ease 0.5s duration-700 text-secondary-white"
                  : "text-purple"
              }`}
              onClick={(e: any) => setColor("home")}
            >
              {" "}
              <Link href={"#"}>Home</Link>{" "}
            </li>
            <li
              className={`sm:text-xl font-medium hover:underline ${
                color === "education"
                  ? "transition all ease 0.5s duration-700 text-secondary-white"
                  : "text-purple"
              }`}
              onClick={() => setColor("education")}
            >
              {" "}
              <Link href={"#"}>education</Link>{" "}
            </li>
            <li
              className={`  sm:text-xl font-medium hover:underline ${
                color === "experiance"
                  ? "transition all ease 0.5s duration-700 text-secondary-white "
                  : "text-purple"
              }`}
              onClick={() => setColor("experiance")}
            >
              {" "}
              <Link href={"#"}>experiance</Link>{" "}
            </li>
          </ul>
        </div>
        <div className="lg:flex gap-4 hidden  ">
          <Link href={"#"}>
            <Image src={githubIcon} alt="githubIcon"></Image>
          </Link>
          <Link href={"#"}>
            <Image src={linkedinIcon} alt="linkedinIcon"></Image>
          </Link>
          <Link href={"#"}>
            <Image src={mailIcon} alt="mailIcon"></Image>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
