import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "AI Automation Suite",
          path: "/thumb1.jpg",
          link: "https://example.com/project-1",
        },
        {
          title: "Fintech Dashboard",
          path: "/thumb2.jpg",
          link: "https://example.com/project-2",
        },
        {
          title: "Crypto Tracker UI",
          path: "/thumb3.jpg",
          link: "https://example.com/project-3",
        },
        {
          title: "Ecommerce Pro Store",
          path: "/thumb4.jpg",
          link: "https://example.com/project-4",
        },
        {
          title: "Healthcare Portal",
          path: "/thumb1.jpg",
          link: "https://example.com/project-5",
        },
        {
          title: "HR Management System",
          path: "/thumb2.jpg",
          link: "https://example.com/project-6",
        },
      ],
    },
    {
      images: [
        {
          title: "Learning Management App",
          path: "/thumb3.jpg",
          link: "https://example.com/project-7",
        },
        {
          title: "Real Estate Platform",
          path: "/thumb4.jpg",
          link: "https://example.com/project-8",
        },
        {
          title: "Food Delivery UI",
          path: "/thumb1.jpg",
          link: "https://example.com/project-9",
        },
        {
          title: "Portfolio Website",
          path: "/thumb2.jpg",
          link: "https://example.com/project-10",
        },
        {
          title: "Startup Landing Page",
          path: "/thumb3.jpg",
          link: "https://example.com/project-11",
        },
        {
          title: "Booking System App",
          path: "/thumb4.jpg",
          link: "https://example.com/project-12",
        },
      ],
    },
    {
      images: [
        {
          title: "Admin Panel UI",
          path: "/thumb1.jpg",
          link: "https://example.com/project-13",
        },
        {
          title: "Social Media Dashboard",
          path: "/thumb2.jpg",
          link: "https://example.com/project-14",
        },
        {
          title: "AI Chat Application",
          path: "/thumb3.jpg",
          link: "https://example.com/project-15",
        },
        {
          title: "SaaS Analytics Tool",
          path: "/thumb4.jpg",
          link: "https://example.com/project-16",
        },
        {
          title: "Travel Booking Website",
          path: "/thumb1.jpg",
          link: "https://example.com/project-17",
        },
        {
          title: "Fitness Tracking App",
          path: "/thumb2.jpg",
          link: "https://example.com/project-18",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const itemsPerPage = 6;
  const allImages = useMemo(
    () => workSlides.slides.flatMap((s) => s.images),
    []
  );
  const totalPages = Math.max(1, Math.ceil(allImages.length / itemsPerPage));
  const [page, setPage] = useState(1);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  const pageItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return allImages.slice(start, start + itemsPerPage);
  }, [allImages, page]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 cursor-pointer h-full mt-6 sm:mt-10">
        {pageItems.map((image, imageI) => (
          <div
            className="relative rounded-lg overflow-hidden flex items-center justify-center group"
            key={`${page}-${imageI}-${image.title}`}
          >
            <div className="flex items-center justify-center relative overflow-hidden group w-full aspect-[4/3] sm:aspect-[5/3]">
              <Image
                src={image.path}
                alt={image.title}
                width={200}
                height={120}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                aria-hidden
              />

              <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-6 sm:group-hover:-translate-y-8 group-hover:xl:-translate-y-16 transition-all duration-300">
                <Link
                  href={image.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-x-1 text-[10px] sm:text-[11px] tracking-[0.1em]"
                >
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-base translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    <BsArrowRight aria-hidden />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => hasPrev && setPage((p) => p - 1)}
            disabled={!hasPrev}
            className={[
              "h-9 px-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-2",
              "border border-white/15",
              hasPrev
                ? "bg-white/10 text-white/90 hover:bg-white/20"
                : "bg-white/5 text-white/40 cursor-not-allowed",
            ].join(" ")}
            aria-label="Previous page"
          >
            <HiChevronLeft className="text-lg" aria-hidden />
            Prev
          </button>

          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              const isActive = p === page;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={[
                    "w-9 h-9 rounded-full text-sm font-semibold transition-all",
                    "border border-white/20",
                    isActive
                      ? "bg-accent text-white"
                      : "bg-white/10 text-white/80 hover:bg-white/20",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={`Go to page ${p}`}
                >
                  {p}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => hasNext && setPage((p) => p + 1)}
            disabled={!hasNext}
            className={[
              "h-9 px-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center gap-2",
              "border border-white/15",
              hasNext
                ? "bg-white/10 text-white/90 hover:bg-white/20"
                : "bg-white/5 text-white/40 cursor-not-allowed",
            ].join(" ")}
            aria-label="Next page"
          >
            Next
            <HiChevronRight className="text-lg" aria-hidden />
          </button>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-[12px] text-white/60">
          <span className="font-semibold text-white/80">{`Page ${page}`}</span>
          <span aria-hidden>•</span>
          <span>{`of ${totalPages}`}</span>
          {hasNext && (
            <span className="hidden sm:inline-block">{`• More projects on page ${page + 1}`}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;