import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Logo } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActiveSection } from "@/hooks/use-active-section";
import { navItems, sectionIds } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SocialLinks } from "./SocialLinks";

function isItemActive(
  itemId: string,
  pathname: string,
  activeSection: string
) {
  if (itemId === "gallery") return pathname === "/gallery";
  return pathname === "/" && activeSection === itemId;
}

export function SiteHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [overHero, setOverHero] = useState(
    () => location.pathname === "/" && location.hash === ""
  );
  const activeSection = useActiveSection(
    sectionIds,
    location.pathname === "/"
  );

  useEffect(() => {
    if (location.pathname !== "/") {
      setOverHero(false);
      return;
    }

    const onScroll = () => {
      const hero = document.getElementById("band");
      if (!hero) {
        setOverHero(false);
        return;
      }
      setOverHero(hero.getBoundingClientRect().bottom > 88);
    };

    onScroll();
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        overHero
          ? "border-transparent bg-transparent"
          : "border-border bg-background"
      )}
    >
      <div className="content-frame flex h-16 items-center justify-between gap-6 px-5 md:px-10 lg:h-[4.5rem] lg:px-14">
        <Link to="/#band" className="shrink-0" aria-label="Jack 'n' Roll, na začetek">
          <img
            src={Logo}
            alt=""
            className="h-10 w-auto mix-blend-screen lg:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Glavni meni">
          {navItems.map((item) => {
            const active = isItemActive(item.id, location.pathname, activeSection);
            return (
              <Link
                key={item.id}
                to={item.href}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "relative py-2 font-condensed text-[13px] uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:text-foreground",
                  active && "text-foreground"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-px bg-foreground transition-all duration-300",
                    active ? "w-full" : "w-0"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks className="hidden lg:flex" />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Odpri meni"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Meni</SheetTitle>
              <SheetDescription className="sr-only">
                Navigacija po straneh skupine Jack &apos;n&apos; Roll
              </SheetDescription>
              <Link
                to="/#band"
                onClick={() => setMenuOpen(false)}
                className="inline-block"
                aria-label="Jack 'n' Roll, na začetek"
              >
                <img src={Logo} alt="" className="h-14 w-auto mix-blend-screen" />
              </Link>
              <nav className="mt-12 flex flex-col" aria-label="Mobilni meni">
                {navItems.map((item) => {
                  const active = isItemActive(
                    item.id,
                    location.pathname,
                    activeSection
                  );
                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "true" : undefined}
                      className={cn(
                        "border-b border-border py-4 font-display text-5xl leading-none tracking-wide text-foreground/75 transition-colors hover:text-foreground",
                        active && "text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <SocialLinks labelled className="mt-auto flex-col items-start" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
