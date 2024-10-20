import Wrapper from "@/components/shared/Wrapper";
import ExperianceCard from "./ExperianceCard";
import { ExperianceCardType } from "@/types/type";
import { fetchExperience } from "@/lib/FetchExperience";
import HeadingSection from "./HeadingSection";
const ExperiencePage = async (): Promise<JSX.Element> => {
  const experience = await fetchExperience();
  return (
    <Wrapper>
      <HeadingSection />
      <div>
        {experience.map(
          (
            {
              domain,
              startDate,
              endDate,
              place,
              companyName,
              detailPara1,
              detailPara2,
            }: ExperianceCardType,
            index: number
          ) => (
            <ExperianceCard
              key={index}
              domain={domain}
              startDate={startDate}
              endDate={endDate}
              place={place}
              companyName={companyName}
              detailPara1={detailPara1}
              detailPara2={detailPara2}
            />
          )
        )}
      </div>
    </Wrapper>
  );
};

export default ExperiencePage;
