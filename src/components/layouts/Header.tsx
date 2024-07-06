"use client";

import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import { useEffect, useState } from "react";
import Image from "next/image";
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import mailIcon from "@/assets/icons/mail.svg";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = (): React.JSX.Element => {
  const [position, setPosition] = useState<string>("");
  const path: string = usePathname();
  const [pathName, setpathName] = useState<null | string>(null);
  console.log(pathName);
  useEffect(() => {
    setpathName(path);
  }, [path]);

  return (
    <Wrapper>
      <div className="fixed -translate-x-1/2 left-1/2 z-[99] w-full md:w-[60%]  bg-secondary-black overflow-hidden text-secondary-white  rounded-full h-full p-4 sm:p-0 sm:h-14 flex items-center justify-center gap-4">
        <div className="pages">
          <ul className="flex flex-wrap sm:gap-6 gap-2">
            <li
              className={`sm:text-xl font-medium hover:underline ${
                pathName === "/"
                  ? "transition all ease 0.5s duration-700 text-secondary-white"
                  : "text-purple"
              }`}
            >
              {" "}
              <Link href={"/"}>Home</Link>{" "}
            </li>
            <li
              className={`sm:text-xl font-medium hover:underline ${
                pathName === "/education"
                  ? "transition all ease 0.5s duration-700 text-secondary-white"
                  : "text-purple"
              }`}
            >
              {" "}
              <Link href={"/education"}>education</Link>{" "}
            </li>
            <li
              className={`  sm:text-xl font-medium hover:underline ${
                pathName === "/experiance"
                  ? "transition all ease 0.5s duration-700 text-secondary-white"
                  : "text-purple"
              }`}
            >
              {" "}
              <Link href={"/experiance"}>experiance</Link>{" "}
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <span
                    className={`bg-transparent hover:bg-transparent p-0  -mt-2 sm:-mt-1 sm:text-xl font-medium hover:underline outline-none cursor-pointer ${
                      pathName === "/projects" ||
                      pathName === "/projects/htmlcssjsProjects" ||
                      pathName === "/projects/nextjsProjects" ||
                      pathName === "/projects/othersProjects"
                        ? "transition all ease 0.5s duration-700 text-secondary-white"
                        : "text-purple"
                    }`}
                  >
                    projects
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-primary-black text-primary-white z-[99]">
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <Link href={"/projects/htmlcssjsProjects"}>
                      <DropdownMenuRadioItem
                        value="top"
                        className="hover:text-primary-black font-semibold cursor-pointer"
                      >
                        HTML,CSS,JS Projects
                      </DropdownMenuRadioItem>
                    </Link>
                    <Link href={"/projects/nextjsProjects"}>
                      <DropdownMenuRadioItem
                        value="bottom"
                        className="hover:text-primary-black font-semibold cursor-pointer"
                      >
                        Nextjs Projects
                      </DropdownMenuRadioItem>
                    </Link>
                    <Link href={"/projects/othersProjects"}>
                      <DropdownMenuRadioItem
                        value="right"
                        className="hover:text-primary-black font-semibold cursor-pointer"
                      >
                        Other Projects
                      </DropdownMenuRadioItem>
                    </Link>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
        <div className="lg:flex gap-4 hidden  ">
          <Link href={"https://github.com/nadeemsangrasi"} target="blank">
            <Image src={githubIcon} alt="githubIcon" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nadeem-khan-a083702b9"}
            target="blank"
          >
            <Image src={linkedinIcon} alt="linkedinIcon" />
          </Link>
          <Link href={"#"}>
            <Image src={mailIcon} alt="mailIcon" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;