import React from "react";

const EducationCard = (): React.JSX.Element => {
  return (
    <div className="w-full mx-auto my-8 sm:w-[50%] border-l border-r border-t border-b border-secondary-gray p-6 rounded-3xl">
      <h2 className="text-purple text-xl pb-4 pt-5 sm:pt-0">School Name</h2>
      <p className="text-secondary-gray font-light  text-[1rem] sm:text-lg pb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias quod
        reprehenderit odit officiis vel in modi labore debitis blanditiis
        quisquam illo eveniet, itaque necessitatibus? Sed labore eum architecto?
        Ipsam, neque?
      </p>
    </div>
  );
};

export default EducationCard;
