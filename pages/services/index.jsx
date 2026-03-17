import { motion } from "framer-motion";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxMobile, // Added RxMobile for App Development
  RxCube, // Added RxCube for Backend/API or another service
  RxCode, // Added RxCode for general development or AI integration
} from "react-icons/rx"; // Assuming you have these icons or similar

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

export const serviceData = [
  {
    icon: <RxDesktop />, // Can also use RxCode or RxDesktop
    title: "Full-Stack AI Developer",
    description: "End-to-end development of AI-powered web applications and services.",
  },
  {
    icon: <RxMobile />,
    title: "AI-Powered App Dev",
    description: "Building intelligent mobile and desktop applications with integrated AI.",
  },
  {
    icon: <RxPencil2 />, // Could also use RxCode or a more specific AI icon if available
    title: "Machine Learning Solutions",
    description: "Designing, training, and deploying custom ML models for various domains.",
  },
  {
    icon: <RxCube />, // Good for backend or platform development
    title: "Backend & API (AI)",
    description: "Developing robust AI-integrated backend systems and secure API endpoints.",
  },
  {
    icon: <RxRocket />,
    title: "Cloud & MLOps Engineering",
    description: "Implementing scalable cloud infrastructure and MLOps pipelines for AI systems.",
  },
  {
    icon: <RxReader />, // RxReader can imply analysis or strategy
    title: "AI Strategy & Consulting",
    description: "Guiding businesses in adopting AI, from concept to deployment and optimization.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 pt-3 pb-6 md:pt-6 md:pb-10 flex items-start xl:items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Professional services tailored to your digital needs, ranging from
              advanced AI integration and SaaS development to comprehensive
              full-stack engineering.
            </motion.p>
          </div>

          {/* Service Cards Grid */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-lg px-4 py-5 flex flex-col gap-3 group cursor-pointer hover:bg-white/20 transition-all duration-300 relative"
              >
                {/* icon */}
                <div className="text-3xl text-accent">
                  {service.icon}
                </div>
                {/* title & description */}
                <div className="flex flex-col items-start text-left">
                  <div className="text-[15px] font-semibold leading-snug">
                    {service.title}
                  </div>
                  <p className="max-w-[320px] text-[12px] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {/* arrow - You might remove this if it clutters the small card, or adjust its position */}
                <div className="text-2xl absolute bottom-4 right-4 group-hover:rotate-45 group-hover:text-accent transition-all duration-300">
                  <RxArrowTopRight />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;