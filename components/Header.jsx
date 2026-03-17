import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="relative z-30 w-full items-center px-4 sm:px-8 lg:px-10 xl:px-0 h-[2px] xl:h-[2px] ">
      <div className="container mx-auto">
        <div className="bg-transparent flex flex-col lg:flex-row justify-between items-center gap-y-1 py-4 sm:py-3 lg:py-4 xl:py-4 ">
          {/* logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="select-none group"
          >
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 ">
              <div className="flex items-baseline gap-2">
                <span className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-white">
                  Syed Ahzam
                </span>
                <span className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold tracking-tight text-accent">
                  Imam
                </span>
              </div>
              {/* Portfolio text */}
              <span className="text-[11px] md:text-[14px] tracking-[0.25em] uppercase text-white/60 sm:ml-2 mt-1 sm:mt-1">
               - Portfolio -
              </span>
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