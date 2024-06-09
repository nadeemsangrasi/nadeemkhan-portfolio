import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="container mx-auto py-4">{children}</div>;
};

export default Wrapper;
