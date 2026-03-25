import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import projectsData from "../data/projects.json";

const WorkSlider = () => {
  const itemsPerPage = 6;
  const allProjects = projectsData;
  const totalPages = Math.max(1, Math.ceil(allProjects.length / itemsPerPage));
  const [page, setPage] = useState(1);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  const pageItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return allProjects.slice(start, start + itemsPerPage);
  }, [allProjects, page]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 cursor-pointer h-full mt-6 sm:mt-10">
        {pageItems.map((project, index) => (
          <Link
            key={`${page}-${index}-${project.id}`}
            href={`/work/${project.id}`}
            className="relative rounded-lg overflow-hidden flex items-center justify-center group w-full aspect-[4/3] sm:aspect-[5/3]"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={200}
              height={120}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
              aria-hidden
            />

            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-6 sm:group-hover:-translate-y-8 group-hover:xl:-translate-y-16 transition-all duration-300">
              <div className="flex items-center gap-x-1 text-[10px] sm:text-[11px] tracking-[0.1em]">
                <div className="delay-100 uppercase">VIEW</div>
                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 uppercase">
                  PROJECT
                </div>
                <div className="text-base translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  <BsArrowRight aria-hidden />
                </div>
              </div>
            </div>
          </Link>
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