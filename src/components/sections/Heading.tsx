import Wrapper from "../shared/Wrapper";
import { motion } from "framer-motion";
const Heading = (): React.JSX.Element => {
  return (
    <Wrapper>
      <div className="text-center my-24">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
          className="text-heading-1 break-words text-5xl sm:text-7xl font-bold pb-10"
        >
          TypeScript
        </motion.h1>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
          className="text-heading-2 break-words text-5xl sm:text-7xl font-bold pb-10"
        >
          Next.js
        </motion.h1>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
          }}
          className="text-heading-3 break-words text-5xl sm:text-7xl font-bold pb-10"
        >
          React.js
        </motion.h1>
      </div>
    </Wrapper>
  );
};

export default Heading;
