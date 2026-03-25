import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Liam Anderson",
    position: "Digital Strategist",
    message:
      "Ahzam transformed our vision into a high-performance web application. His attention to detail in the UI and smooth animations set our platform apart.",
  },
  {
    image: "/t-avt-2.png",
    name: "Sophia Rodriguez",
    position: "Product Owner",
    message:
      "Working with Ahzam was an absolute pleasure. He delivered complex features ahead of schedule and his technical expertise in Next.js is truly impressive.",
  },
  {
    image: "/t-avt-3.png",
    name: "Ethan Wright",
    position: "Software Architect",
    message:
      "A rare developer who combines great design sense with solid engineering. He built a scalable and secure backend that handles our traffic effortlessly.",
  },
  {
    image: "/t-avt-1.png",
    name: "Ayesha Khan",
    position: "Startup Owner",
    message:
      "Professional delivery, clear communication, and strong engineering judgment throughout the project.",
  },
  {
    image: "/t-avt-2.png",
    name: "Omar Ali",
    position: "CTO",
    message:
      "Great at taking ownership end-to-end and shipping features quickly without sacrificing quality.",
  },
  {
    image: "/t-avt-3.png",
    name: "Sara Malik",
    position: "Project Manager",
    message:
      "The timeline was managed well and updates were consistent. The final result exceeded expectations.",
  },
  {
    image: "/t-avt-1.png",
    name: "Hassan Raza",
    position: "Operations",
    message:
      "Reliable, responsive, and detail-oriented. Our workflow improved significantly after the release.",
  },
  {
    image: "/t-avt-2.png",
    name: "Fatima Noor",
    position: "Marketing Lead",
    message:
      "Loved the UI polish and performance improvements. The experience feels premium and fast.",
  },
  {
    image: "/t-avt-3.png",
    name: "Bilal Ahmed",
    position: "Team Lead",
    message:
      "Clean code, thoughtful architecture, and quick iterations. Easy to collaborate with and very dependable.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
      {testimonialData.map((person, i) => (
        <div
          key={`${person.name}-${i}`}
          className="h-full rounded-xl border border-white/10 bg-[rgba(65,47,123,0.18)] px-4 py-3 hover:bg-[rgba(89,65,169,0.18)] transition-all duration-300 mt-3"
        >
          <div className="flex items-start gap-3">
            <div className="shrink-0">
              <Image
                src={person.image}
                width={44}
                height={44}
                alt={person.name}
                className="rounded-full"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[14px] font-semibold leading-snug truncate">
                    {person.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60">
                    {person.position}
                  </div>
                </div>

                <FaQuoteLeft className="text-2xl text-white/25" aria-hidden />
              </div>

              <p className="mt-2 text-[12px] leading-relaxed text-white/70">
                {person.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
