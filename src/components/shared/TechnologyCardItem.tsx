import { TechnologyCardItemType } from "@/types/type";
import Image from "next/image";
import React from "react";

const TechnologyCardItem = ({
  logo,
  title,
}: TechnologyCardItemType): React.JSX.Element => {
  return (
    <div className="flex gap-2 items-center pb-4 justify-center sm:justify-start mx-3">
      <Image
        src={logo}
        alt={title + "Logo"}
        className="w-[40px] h-[40px] bg-primary-gray rounded-full p-2  "
      />{" "}
      <span className="font-semibold break-words text-md sm:text-[17px]   ">
        {title}
      </span>
    </div>
  );
};

export default TechnologyCardItem;
