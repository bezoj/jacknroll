import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

interface SiteShellProps {
  children: ReactNode;
  title?: string;
}

export function SiteShell({ children, title }: SiteShellProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title ? `${title} — Jack 'n' Roll` : "Jack 'n' Roll";
  }, [title]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior, block: "start" });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, behavior });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0"
        width="0"
        height="0"
      >
        <filter id="band-bw" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0.28 0.52 0.2 0 0 0.28 0.52 0.2 0 0 0.28 0.52 0.2 0 0 0 0 0 1 0"
          />
          <feComponentTransfer>
            <feFuncR type="linear" slope="0.72" intercept="0.04" />
            <feFuncG type="linear" slope="0.72" intercept="0.04" />
            <feFuncB type="linear" slope="0.72" intercept="0.04" />
          </feComponentTransfer>
        </filter>
      </svg>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-foreground focus:px-4 focus:py-3 focus:font-condensed focus:text-xs focus:uppercase focus:tracking-[0.18em] focus:text-background"
      >
        Preskoči na vsebino
      </a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
