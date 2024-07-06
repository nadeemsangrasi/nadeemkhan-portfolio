import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({
  children,
}): React.JSX.Element => {
  return (
    <div className="overflow-hidden md:container md:mx-auto py-4 md:px-12 px-3 z-[99]">
      {children}
    </div>
  );
};

export default Wrapper;
