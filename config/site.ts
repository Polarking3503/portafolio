import { link } from "fs";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Luis Jorge Reynaga - FullStack Developer",
  description: "FullStack Developer con 4+ años de experiencia en desarrollo web, IA y automatización. Especializado en React, Next.js, Node.js y Python.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Proyectos",
      href: "/docs",
    },
    {
      label: "Habilidades",
      href: "/pricing",
    },
    {
      label: "Experiencia",
      href: "/blog",
    },
    {
      label: "Sobre mí",
      href: "/about",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Proyectos",
      href: "/docs",
    },
    {
      label: "Habilidades",
      href: "/pricing",
    },
    {
      label: "Experiencia",
      href: "/blog",
    },
    {
      label: "Sobre mí",
      href: "/about",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/Polarking3503",
    linkedin: "https://www.linkedin.com/in/luis-jorge-reynaga-56b257235/",
    email: "mailto:reynaga_45@icloud.com?subject=Contacto desde Portafolio&body=Hola Luis Jorge,%0D%0A%0D%0AMe gustaría contactarte sobre..."
  },
};
