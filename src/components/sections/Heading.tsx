import Wrapper from "../shared/Wrapper";

const Heading = (): React.JSX.Element => {
  return (
    <Wrapper>
      <div className="text-center my-24">
        <h1 className="text-heading-1 break-words text-5xl sm:text-7xl font-bold pb-10">
          TypeScript
        </h1>
        <h1 className="text-heading-2 break-words text-5xl sm:text-7xl font-bold pb-10">
          Next
        </h1>
        <h1 className="text-heading-3 break-words text-5xl sm:text-7xl font-bold pb-10">
          React
        </h1>
      </div>
    </Wrapper>
  );
};

export default Heading;
