import Image from "next/image";
import React from "react";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import ExperianceCard from "./ExperianceCard";
const ExperiancePage = (): React.JSX.Element => {
  return (
    <Wrapper>
      {/* <div className="flex items-center space-x-1 absolute top-8 left-16">
        <Image src={arrowLeft} alt="arrrowImage" />{" "}
        <span className="text-primary-white font-semibold text-lg">
          <Link href={"/"}>back</Link>
        </span>
      </div> */}
      <div className="w-1/2 mx-auto  text-center my-14">
        <p className="text-secondary-gray  text-xl md:text-2xl leading-9  hover:font-extralight">
          &lt; Here, you can know me a little more and see my whole experience
          as a{" "}
          <span className="text-primary-white font-normal">
            Front-End Software Engineer.
          </span>
          /&gt;
        </p>
        <Button title="Download CV" />
      </div>
      <div>
        <ExperianceCard />
        <ExperianceCard />
        <ExperianceCard />
      </div>
    </Wrapper>
  );
};

export default ExperiancePage;
