import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="relative z-30 w-full items-center bg-transparent px-4 sm:px-8 lg:px-10 xl:px-0 xl:h-[72px]">
      <div className="container mx-auto">
        <div className="bg-transparent flex flex-col lg:flex-row justify-between items-center gap-y-1 py-2 sm:py-3 lg:py-4 xl:py-4">
          {/* logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="select-none group"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-white">
                Ahzam
              </span>
              <span className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-accent">
                Imam
              </span>
              <span
                className="text-accent text-[22px] sm:text-[24px] md:text-[28px] leading-none group-hover:opacity-90 transition-opacity"
                aria-hidden
              >
                .
              </span>
            </div>
            <div className="mt-1 text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-white/50">
              Portfolio
            </div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
