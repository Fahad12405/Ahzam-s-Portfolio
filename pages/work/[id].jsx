import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import projectsData from "../../data/projects.json";

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-primary/30 pt-32 pb-6 md:pt-40 md:pb-10 overflow-y-auto">
      <Head>
        <title>{project.title} | Portfolio</title>
        <meta name="description" content={project.shortDescription} />
      </Head>

      <div className="container mx-auto px-4 lg:px-0">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col gap-6 lg:gap-10"
        >
          {/* Header section */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-end border-b border-white/20 pb-8">
            <div>
              <div className="text-accent text-sm md:text-base mb-2 uppercase tracking-[0.2em] font-semibold">
                {project.category}
              </div>
              <h1 className="h1 mb-4">{project.title}</h1>
              <p className="max-w-2xl text-[14px] sm:text-base leading-relaxed">
                {project.shortDescription}
              </p>
            </div>
            {project.liveUrl && project.liveUrl !== "#" && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Live View
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
            {/* Left Column: Details */}
            <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
              <div>
                <h3 className="text-xl font-semibold mb-3">Project Details</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Managed By</span>
                    <span className="font-medium">{project.managedBy}</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/60">Handover</span>
                    <span className="font-medium">{project.projectHandover}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services?.map((service, index) => (
                    <span
                      key={index}
                      className="bg-white/10 px-4 py-2 rounded-lg text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {project.tags && project.tags.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-accent/20 text-accent px-4 py-2 rounded-lg text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Content Overview */}
            <div className="lg:col-span-2 space-y-10 order-1 lg:order-2">
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {project.overview && (
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Overview</h2>
                  <p className="text-lg leading-relaxed">{project.overview}</p>
                </div>
              )}

              {project.challenge && (
                <div>
                  <h2 className="text-3xl font-semibold mb-4">The Challenge</h2>
                  <p className="text-lg leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Our Solution</h2>
                  <p className="text-lg leading-relaxed">{project.solution}</p>
                </div>
              )}

              {project.results && (
                <div>
                  <h2 className="text-3xl font-semibold mb-4">Results</h2>
                  <p className="text-lg leading-relaxed">{project.results}</p>
                </div>
              )}

              {project.images && project.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/20">
                  {project.images.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="w-full h-[250px] relative rounded-xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = projectsData.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const project = projectsData.find((p) => p.id === params.id) || null;

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetails;
