import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFramer,
  SiPython,
  SiMicrosoftazure,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiOpenai,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiVite,
  SiPostman,
  SiJupyter,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          SiTypescript,
          FaReact,
          SiNextdotjs,
          SiTailwindcss,
          SiRedux,
          FaNodeJs,
          SiExpress,
          SiMongodb,
          SiPostgresql,
          SiFirebase,
          SiVite,
          SiPostman,
        ],
      },
      {
        title: "AI & Tools",
        icons: [
          SiPython,
          SiOpenai,
          SiMicrosoftazure,
          SiFastapi,
          SiPytorch,
          SiTensorflow,
          SiScikitlearn,
          SiJupyter,
          SiDocker,
          SiKubernetes,
          SiGithub,
          SiVisualstudiocode,
          SiFramer,
          FaFigma,
          SiAdobephotoshop,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      [
        {
          title: "AI Solution Engineer",
          company: "MazikGlobal",
          location: "Pakistan",
          stage: "Jun 2024 - Present",
        },
        {
          title: "Software Engineer",
          company: "Hypermatter",
          stage: "Apr 2025 - Present",
        },
      ],
      [
        {
          title: "Technical Consultant",
          company: "Sysartx",
          stage: "Jul 2024 - Aug 2025",
        },
        {
          title: "Software Engineer",
          company: "Nucleus",
          stage: "Jul 2023 - Aug 2025",
        },
      ],
      [
        {
          title: "Chief Operating Officer",
          company: "COGNISOFT LABS",
          stage: "Jul 2022 - Sep 2024",
        },
      ],
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "BS Computer Science - FAST NUCES", stage: "2024" },
      { title: "A Levels - Reads School and College", stage: "2020" },
      { title: "O Levels - Reads School and College", stage: "2018" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 pt-2 pb-8 xl:pt-24 xl:pb-24 text-center xl:text-left overflow-y-auto xl:overflow-hidden">
      <Circles />
      {/* avatar img – desktop only */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto flex flex-col xl:flex-row gap-x-6 px-4 xl:px-0">
        {/* ── LEFT: text + counters ── */}
        <div className="flex-1 flex flex-col justify-center mt-24 xl:mt-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[24px] leading-tight sm:text-[32px] md:text-[40px] xl:text-6xl font-semibold mt-8 sm:mt-0"
          >
            Innovating <span className="text-accent">Solutions</span> through
            expert engineering.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-5 xl:mb-12 mt-3 xl:mt-5 text-[13px] sm:text-[14px] xl:text-base px-1 xl:px-0"
          >
            I am a professional and enthusiastic programmer with a self-learning
            attitude. I love to explore new technologies and am passionate about
            problem-solving. My core skill is based on JavaScript and I love to
            make the web more open to the world.
          </motion.p>

          {/* counters — visible on all screens */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex max-w-[380px] sm:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-6 xl:mb-8"
          >
            <div className="flex flex-1 gap-x-3 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[70px] xl:max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={50} duration={5} />
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[70px] xl:max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={30} duration={5} />
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[70px] xl:max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-[10px] xl:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[70px] xl:max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: tabs + content ── */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[55%] xl:pr-6"
        >
          {/* tab buttons */}
          <div className="flex gap-x-4 xl:gap-x-6 mx-auto xl:mx-0 mb-4 mt-2 xl:mt-0">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize text-[13px] sm:text-[15px] xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* tab content */}
          <div className="py-3 xl:py-6 flex flex-col gap-y-3 xl:gap-y-8">
            {aboutData[index].info.map((rowOrItem, rowOrItemI) => {
              if (aboutData[index].title === "experience") {
                return (
                  <div
                    key={rowOrItemI}
                    className="flex flex-col sm:flex-row justify-between gap-x-6 gap-y-2 mb-3"
                  >
                    {rowOrItem.map((item, itemI) => (
                      <div
                        key={itemI}
                        className="flex flex-col items-center text-center text-white/60 w-full sm:w-1/2 xl:text-left xl:items-start"
                      >
                        <div className="font-light text-white text-[14px] sm:text-[15px] xl:text-xl">
                          {item.title} - {item.company}
                        </div>
                        {item.stage && (
                          <div className="text-[12px] sm:text-sm mt-0.5">{item.stage}</div>
                        )}
                        {item.location && (
                          <div className="text-[12px] sm:text-sm">{item.location}</div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              } else {
                const item = rowOrItem;
                return (
                  <div
                    key={rowOrItemI}
                    className="flex flex-col items-center text-center text-white/60 w-full xl:text-left xl:items-start mb-2 xl:mb-0"
                  >
                    <div className="font-light mb-2 text-white text-[14px] sm:text-[15px] xl:text-xl">
                      {item.title}
                    </div>
                    {item.stage && <div className="text-sm">{item.stage}</div>}

                    {/* icons grid */}
                    <div className="flex flex-wrap justify-center xl:justify-start gap-x-4 gap-y-3 xl:gap-x-6 xl:gap-y-5 mt-3 w-full px-1 xl:px-0">
                      {item.icons?.map((Icon, iconI) => (
                        <div
                          key={iconI}
                          className="text-[22px] sm:text-[26px] xl:text-4xl text-white hover:text-accent transition-all duration-300"
                        >
                          <Icon />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;