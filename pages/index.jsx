import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 xl:h-full">
      {/* text */}
      <div className="w-full xl:h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left xl:h-full container mx-auto px-4 sm:px-0 pt-40 sm:pt-16 xl:pt-20 ">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            animate="show"
            exit="hidden"
            className="h1 text-[30px] leading-tight sm:text-[40px] md:text-[60px] md:leading-[1.3]"
          >
            <span className="block">Syed Ahzam Imam</span>
            <span className="block text-accent">Software Developer</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-10 text-[14px] sm:text-base"
          >
            I am a professional and enthusiastic programmer. I love almost all
            the stacks of web application development and love to make the web
            more open to the world. My core skill is based on JavaScript and I
            love to do most of the things using JavaScript.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative pb-8">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
          {/* mobile avatar */}
        <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="xl:hidden flex justify-center mt-4 mb-20 relative"
          >
            <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[550px] rounded-xl overflow-hidden relative">
              <Avatar imgAlpha="/1.jpg" className="rounded-xl" />

              {/* overlay to darken mobile avatar */}
              <div className="absolute inset-0 bg-black opacity-20 rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-full xl:w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden xl:flex w-full h-full max-w-[737px] max-h-[850px] absolute -bottom-12 lg:bottom-0 lg:right-[5%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
