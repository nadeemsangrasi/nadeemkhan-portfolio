import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import Link from "next/link";
import githubIcon from "@/assets/icons/github.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import mailIcon from "@/assets/icons/mail.svg";
const Footer = (): React.JSX.Element => {
  return (
    <Wrapper>
      <div className="w-full md:w-10/12 bg-secondary-black overflow-hidden text-secondary-white mx-auto rounded-full h-14 flex items-center justify-between gap-4 px-4">
        <h1 className="text-md sm:text-xl">Follow me</h1>
        <div className="flex gap-4   ">
          <Link href={"https://github.com/nadeemsangrasi"} target="blank">
            <Image src={githubIcon} alt="githubIcon" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nadeem-khan-a083702b9"}
            target="blank"
          >
            <Image src={linkedinIcon} alt="linkedinIcon" />
          </Link>
          <Link href={"mailto:nadeemsangrasi903@gmail.com"} target="blank">
            <Image src={mailIcon} alt="mailIcon" />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
