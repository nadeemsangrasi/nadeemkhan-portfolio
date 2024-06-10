import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({
  children,
}): React.JSX.Element => {
  return (
    <div className="overflow-hidden md:container md:mx-auto py-4 md:px-0 px-3">
      {children}
    </div>
  );
};

export default Wrapper;
