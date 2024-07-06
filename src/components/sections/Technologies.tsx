import Wrapper from "../shared/Wrapper";
import TechnologyCard from "../shared/TechnologyCard";
import { technologyCardData } from "@/data/data";
import { TechnologyCardType } from "@/types/type";
const Technologies = (): React.JSX.Element => {
  return (
    <Wrapper>
      <div className="my-12">
        <h1 className="pb-10 text-4xl text-center sm:text-left sm:text-5xl break-words  text-primary-white">
          These are the <br /> technologies I've been using{" "}
        </h1>
        <div className="py-8 text-primary-white text-center flex flex-wrap gap-8 justify-between">
          {technologyCardData.map(
            ({ title, data }: TechnologyCardType, index: number) => (
              <TechnologyCard key={index} title={title} data={data} />
            )
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Technologies;
