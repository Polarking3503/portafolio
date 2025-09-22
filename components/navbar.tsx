'use client';

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import {
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{label: string, href: string}>>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Atajo de teclado Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Términos de búsqueda y sus destinos
  const searchTerms = [
    { keywords: ["inicio", "home", "principal"], label: "Inicio", href: "/" },
    { keywords: ["proyectos", "trabajos", "portfolio", "projects", "saas", "dashboard", "chatbot", "brokers"], label: "Proyectos", href: "/docs" },
    { keywords: ["habilidades", "skills", "tecnologias", "lenguajes", "react", "javascript", "typescript", "node", "python"], label: "Habilidades", href: "/pricing" },
    { keywords: ["experiencia", "trabajo", "carrera", "cv", "vulcanics", "laboral"], label: "Experiencia", href: "/blog" },
    { keywords: ["sobre mi", "about", "bio", "perfil", "jorge"], label: "Sobre mí", href: "/about" },
    { keywords: ["contacto", "contact", "email", "mensaje"], label: "Contacto", href: "/contact" },
  ];

  const handleSearch = (value: string) => {
    setSearchValue(value);
    
    if (value.length < 2) {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    const results = searchTerms.filter(term => 
      term.keywords.some(keyword => 
        keyword.toLowerCase().includes(value.toLowerCase())
      )
    );

    // Eliminar duplicados basados en href
    const uniqueResults = results.filter((item, index, self) => 
      index === self.findIndex(t => t.href === item.href)
    );

    setSearchResults(uniqueResults);
    setIsSearchOpen(uniqueResults.length > 0);
  };

  const handleSearchSelect = (href: string) => {
    setSearchValue("");
    setSearchResults([]);
    setIsSearchOpen(false);
    
    // Si es un mailto, usar window.location.href
    if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else {
      window.location.href = href;
    }
  };

  const searchInput = (
    <div className="relative">
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        endContent={
          <Kbd className="hidden lg:inline-block" keys={["command"]}>
            K
          </Kbd>
        }
        labelPlacement="outside"
        placeholder="Buscar proyectos, habilidades..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setSearchValue("");
            setSearchResults([]);
            setIsSearchOpen(false);
          }
        }}
      />
      
      {/* Resultados de búsqueda */}
      {isSearchOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {searchResults.map((result, index) => (
            <button
              key={`${result.href}-${index}`}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-600 last:border-b-0 flex items-center gap-2"
              onClick={() => handleSearchSelect(result.href)}
            >
              <SearchIcon className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium">{result.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <HeroUINavbar 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl" 
      style={{ position: "fixed" }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Jorge</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({ 
                    color: index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "danger"
                        : "foreground",
                    size: "lg"
                  }),
                )}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
