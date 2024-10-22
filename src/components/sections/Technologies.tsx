import Wrapper from "../shared/Wrapper";
import TechnologyCard from "../shared/TechnologyCard";
import { TechnologyCardType } from "@/types/type";
import TechnologyHeading from "./TechnologyHeading";
import { fetchTechnologyCards } from "@/lib/FetchTechnologyCard";

const Technologies = async (): Promise<JSX.Element> => {
  const technologyCardData = await fetchTechnologyCards();

  return (
    <Wrapper>
      <div className="my-12">
        <TechnologyHeading />
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
