// import { TechnologyCardItemType, TechnologyCardType } from "@/types/type";
// import React from "react";
// import TechnologyCardItem from "./TechnologyCardItem";

// const TechnologyCard = ({
//   title,
//   data,
// }: TechnologyCardType): React.JSX.Element => {
//   return (
//     <div className="w-full sm:w-fit border-l border-t border-b border-r rounded-lg border-secondary-gray py-4 px-4 hover:hue-rotate-90 hover:rotate-[360deg] duration-[800ms]  hover:duration-[1500ms]">
//       <h1 className="font-semibold break-words text-sm sm:text-[1rem] pb-2">
//         {title}
//       </h1>
//       {data.map(({ logo, title }: TechnologyCardItemType) => (
//         <TechnologyCardItem key={title} logo={logo} title={title} />
//       ))}
//     </div>
//   );
// };

// export default TechnologyCard;
"use client";
import React from "react";
import { TechnologyCardItemType, TechnologyCardType } from "@/types/type";
import TechnologyCardItem from "./TechnologyCardItem";
import { BackgroundGradient } from "../ui/background-gradient";

const TechnologyCard = ({
  title,
  data,
}: TechnologyCardType): React.JSX.Element => {
  return (
    <div className="mx-auto md:mx-0">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-black dark:bg-zinc-900 w-full sm:w-fit   border-secondary-gray  hover:hue-rotate-90  duration-[800ms]  hover:duration-[1500ms] ">
        <h1 className="font-semibold break-words text-sm sm:text-[1rem] pb-2">
          {title}
        </h1>
        {data.map(({ logo, title }: TechnologyCardItemType) => (
          <TechnologyCardItem key={title} logo={logo} title={title} />
        ))}
      </BackgroundGradient>
    </div>
  );
};

export default TechnologyCard;
