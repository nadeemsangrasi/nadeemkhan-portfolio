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
          <Link href={"#"}>
            <Image src={githubIcon} alt="githubIcon"></Image>
          </Link>
          <Link href={"#"}>
            <Image src={linkedinIcon} alt="linkedinIcon"></Image>
          </Link>
          <Link href={"#"}>
            <Image src={mailIcon} alt="mailIcon"></Image>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
