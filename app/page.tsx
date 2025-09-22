'use client'

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import SplitText from "../components/UI/SpliText.jsx";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import About from "./about/page";
import Blog from "./blog/page";
import DocsPage from "./docs/page";
import PricingPage from "./pricing/page";

const handleAnimationComplete = () => {
  console.log("Animation complete");
};
export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-full text-center justify-center mt-25">
        <SplitText
          className="text-7xl font-semibold text-center mb-4"
          delay={70}
          duration={2}
          ease="elastic.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
          text="Hola, soy Jorge Reynaga"
        />
        <br />
        <span className={title({ size: "sm", color: "violet" })}>FullStack Developer&nbsp;</span>
        <br />
        <span className={title({ size: "sm", color: "cyan" })}>
          +4 años de experiencia
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Experto en el frontend y backend, construyendo aplicaciones web, moviles
          y Chatbots con IA.
        </div>
      </div>

      <div className="flex gap-3 mb-20">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/files/cv-luis-jorge.pdf"}
        >
          CV
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.linkedin}
        >
          <LinkedinIcon size={20} />
          LinkedIn
        </Link>
      </div>

      <div className="mt-8">
        <div className="mb-16">
          <About />
        </div>
        <div className="mb-16">
          <Blog />
        </div>
        <div className="mb-16">
          <DocsPage />
        </div>
        <div>
          <PricingPage />
        </div>
      </div>
    </section>
  );
}
