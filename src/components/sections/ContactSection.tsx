import React from "react";
import ContactUsForm from "../shared/ContactForm";
import Heading from "@/components/shared/Heading";
const ContactSection = (): JSX.Element => {
  return (
    <div className="my-8">
      <Heading
        text="Contact Now"
        color="text-heading-3"
        dir="x"
        value={100}
        delay={0.2}
      />

      <div className="my-16 px-4 sm:px-0">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactSection;
