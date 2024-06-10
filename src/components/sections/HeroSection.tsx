import Link from "next/link";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import myImage from "@/assets/images/myImage.png";
import Button from "../shared/Button";
const HeroSection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <div className="md:my-4 md:mx-8 flex flex-col-reverse  md:flex-row items-center justify-between w-full">
        <div className="w-full md:w-1/2 py-6 md:py-0 mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl text-primary-white py-7">
            Hi, I'm Nadeem
          </h1>
          <p className="text-secondary-gray font-light text-xl md:text-2xl leading-9 md:leading-10 hover:font-extralight">
            Lorem ipsum
            <span className="text-primary-white"> dolor </span> sit
            <span className="text-primary-white"> amet consectetur </span>
            adipisicing elit. Iure similique delectus autem ab, ut distinctio
            voluptatum! Dignissimos ullam reiciendis asperiores!
          </p>
          <Button title="Download CV" />
          <span className="text-purple px-2 md:px-6 font-medium text-lg md:inline-block block">
            <Link href={"#"}>see experiances</Link>
          </span>
        </div>
        <div className="w-full md:w-1/2 lg:w-[38%]">
          <Image src={myImage} alt="img" className="w-full h-full" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
