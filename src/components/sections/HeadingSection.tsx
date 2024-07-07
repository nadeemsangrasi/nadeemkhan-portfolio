"use client";
import Wrapper from "../shared/Wrapper";
import { motion } from "framer-motion";
import Heading from "../shared/Heading";
import { headingData } from "@/data/data";
import { HeadingDataType } from "@/types/type";
const HeadingSection = (): React.JSX.Element => {
  return (
    <Wrapper>
      <div className="text-center my-24">
        {headingData.map(
          (
            { text, color, dir, value, delay }: HeadingDataType,
            index: number
          ): JSX.Element => (
            <Heading
              key={index}
              text={text}
              color={color}
              dir={dir}
              value={value}
              delay={delay}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default HeadingSection;
