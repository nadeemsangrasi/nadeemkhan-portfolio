import { TechnologyCardItemType, TechnologyCardType } from "@/types/type";
import React from "react";
import TechnologyCardItem from "./TechnologyCardItem";

const TechnologyCard = ({
  title,
  data,
}: TechnologyCardType): React.JSX.Element => {
  return (
    <div className="w-full sm:w-fit border-l border-t border-b border-r rounded-lg border-secondary-gray py-4 px-4 hover:hue-rotate-90 hover:rotate-180 duration-1000  hover:duration-1000">
      <h1 className="font-semibold break-words text-sm sm:text-[1rem] pb-2">
        {title}
      </h1>
      {data.map(({ logo, title }: TechnologyCardItemType) => (
        <TechnologyCardItem logo={logo} title={title} />
      ))}
    </div>
  );
};

export default TechnologyCard;
