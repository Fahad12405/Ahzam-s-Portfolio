import Link from "next/link";

import {
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
  RiMailCheckFill,
  RiTwitterLine,
  RiStackOverflowLine,
} from "react-icons/ri";
import { SiUpwork } from "react-icons/si";

export const socialData = [
  {
    name: "Github",
    link: "https://github.com/Syed-Ahzam-Imam",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/syed-ahzam-imam-68755722b/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~012685f7c7a98c7917",
    Icon: SiUpwork,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
    Icon: RiTwitterLine,
  },
  {
    name: "Email Adress",
    link: "mailto:ahzamimam92@gmail.com",
    Icon: RiMailCheckFill,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-4 sm:gap-x-5 text-base sm:text-lg mt-4 sm:mt-0 ">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};


export default Socials;
