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
  FaNodeJs, // Make sure FaNodeJs is imported correctly
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
      // Group experiences into arrays of two
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
        // You can add another experience here if needed, or leave it as a single item if odd
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
    <div className="min-h-screen bg-primary/30 pt-1 pb-6 md:pt-3 md:pb-2 xl:pt-12 xl:pb-24 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mt-6 md:mt-2">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[32px] leading-tight sm:text-[40px] md:text-[48px] xl:text-6xl"
          >
            Innovating <span className="text-accent">Solutions</span> through
            expert engineering.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[520px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 mt-5 text-[14px] sm:text-base"
          >
            I am a professional and enthusiastic programmer with a self-learning
            attitude. I love to explore new technologies and am passionate about
            problem-solving. My core skill is based on JavaScript and I love to
            make the web more open to the world.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={30} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[55%] h-auto md:h-[560px] xl:h-[500px] xl:pr-6"
        >
          <div className="flex gap-x-4 xl:gap-x-4 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize text-[14px] sm:text-base xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-8 flex-1">
            {aboutData[index].info.map((rowOrItem, rowOrItemI) => {
              // Conditional rendering for 'experience' section to display items in rows
              if (aboutData[index].title === "experience") {
                return (
                  <div
                    key={rowOrItemI}
                    className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-3 mb-4"
                  >
                    {rowOrItem.map((item, itemI) => (
                      <div
                        key={itemI}
                        className="flex flex-col items-center text-center text-white/60 w-full md:w-1/2 xl:text-left xl:items-start"
                      >
                        {/* title */}
                        <div className="font-light mb-1 md:mb-0 text-white text-[15px] sm:text-base xl:text-xl">
                          {item.title} - {item.company}
                        </div>
                        {item.stage && (
                          <>
                            <div className="hidden md:flex text-sm">-</div> {/* Smaller dash for cleaner look */}
                            <div className="text-sm">{item.stage}</div>
                          </>
                        )}
                        {item.location && <div className="text-sm">{item.location}</div>}
                      </div>
                    ))}
                  </div>
                );
              } else {
                // Original rendering for 'skills' and 'credentials'
                const item = rowOrItem; // Rename for clarity
                return (
                  <div
                    key={rowOrItemI}
                    className="flex flex-col items-center text-center text-white/60 w-full xl:text-left xl:items-start mb-4 xl:mb-0" // Removed xl:w-[48%] to allow full width
                  >
                    {/* title */}
                    <div className="font-light mb-2 md:mb-0 text-white text-[15px] sm:text-base xl:text-xl">
                      {item.title}
                    </div>
                    {item.stage && (
                      <>
                        <div className="hidden md:flex">-</div>
                        <div>{item.stage}</div>
                      </>
                    )}

                    <div className="flex flex-wrap justify-start gap-x-[1.5rem] gap-y-[1.5rem] mt-4 w-full px-2 xl:px-0">
                      {/* icons */}
                      {item.icons?.map((Icon, iconI) => (
                        <div
                          key={iconI}
                          className="text-3xl sm:text-4xl xl:text-5xl text-white hover:text-accent transition-all duration-300"
                        >
                          {" "}
                          {/* Increased icon size to text-5xl */}
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