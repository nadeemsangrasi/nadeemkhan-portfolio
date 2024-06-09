import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="my-4 mx-8 flex items-center justify-between w-full">
        <div className="w-1/2">
          <h1 className="text-5xl text-primary-white py-7">Hi, I'm Nadeem</h1>
          <p className="text-secondary-gray font-light text-2xl leading-10 hover:font-extralight">
            Lorem ipsum
            <span className="text-primary-white"> dolor </span> sit
            <span className="text-primary-white"> amet consectetur </span>
            adipisicing elit. Iure similique delectus autem ab, ut distinctio
            voluptatum! Dignissimos ullam reiciendis asperiores!
          </p>
          <button className=" px-4 py-2 my-7 font-semibold rounded-full  bg-primary-white text-primary-black">
            Download CV
          </button>
          <span className="text-purple px-6 font-medium text-lg">
            <Link href={"#"}>see experiances</Link>
          </span>
        </div>
        <div className="image w-[38%]">
          <img src="/myImage.png" alt="img" className="w-full h-full" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
