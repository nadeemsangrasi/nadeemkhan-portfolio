import React from "react";
import ContactUsForm from "../shared/ContactForm";
import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <div className="my-8">
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" text-heading-3 break-words text-5xl sm:text-7xl font-bold text-center pt-8"
      >
        Contact Now
      </motion.h1>
      <div className="my-16 px-4 sm:px-0">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactSection;
