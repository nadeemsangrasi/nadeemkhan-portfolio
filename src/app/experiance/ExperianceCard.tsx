import React from "react";

const ExperianceCard = (): React.JSX.Element => {
  return (
    <div className="md:flex w-full sm:w-[90%] mx-auto gap-4 my-16 border bg-expCard p-6 sm:p-14 rounded-xl">
      <div className="w-full sm:w-fit md:w-1/3">
        <h1 className="text-primary-white text-lg sm:text-2xl">
          Front-end Software Engineer
        </h1>
        <h2 className="text-purple text-[1rem] sm:text-xl">Contact</h2>
        <p className="text-secondary-gray font-light text-[1rem] md:text-lg">
          jan 2020 . Present <br /> Karachi,Sindh
        </p>
      </div>
      <div className="w-full sm:w-[67%]">
        <h2 className="text-purple text-xl pb-4 pt-5 sm:pt-0">Company Name</h2>
        <p className="text-secondary-gray font-light  text-[1rem] sm:text-lg pb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          quod reprehenderit odit officiis vel in modi labore debitis blanditiis
          quisquam illo eveniet, itaque necessitatibus? Sed labore eum
          architecto? Ipsam, neque?
        </p>
        <p className="text-secondary-gray font-light  text-[1rem] sm:text-lg pb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          quod reprehenderit odit officiis vel in modi labore debitis blanditiis
          quisquam illo eveniet, itaque necessitatibus? Sed labore eum
          architecto? Ipsam, neque?
        </p>
      </div>
    </div>
  );
};

export default ExperianceCard;
