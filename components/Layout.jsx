import { Sora } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <main
      className={[
        "page bg-site text-white bg-cover bg-no-repeat",
        sora.variable,
        "font-sora relative pb-24 xl:pb-0 overflow-x-hidden",
        isHome ? "page--no-scroll xl:h-screen xl:overflow-hidden" : "",
      ].join(" ")}
    >
      {/* metadata */}
      <Head>
        <title>Ahzam Imam | Portfolio</title>
        <meta
          name="description"
          content="Ahzam Imam is a Full-stack web developer with 10+ years of experience."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
