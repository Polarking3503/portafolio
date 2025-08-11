import "@/styles/globals.css";
import { Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import DarkVeil from "../components/UI/DarkVeil"
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <DarkVeil
            speed={0.8}
            hueShift={43}
            noiseIntensity={0}
            scanlineFrequency={0.5}
            scanlineIntensity={0}
            warpAmount={2.5}
          />
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.linkedin.com/in/luis-jorge-reynaga-56b257235/"
                title="heroui.com homepage"
              >
                <span className="text-default-600">Desarrollado por</span>
                <p className="text-primary">Jorge Reynaga</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
