import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@/assets";
import { sectionIds } from "@/lib/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { SocialLinks } from "./SocialLinks";

export function SiteHeader() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [overHero, setOverHero] = useState(
    () => location.pathname === "/" && location.hash === "",
  );
  const activeSection = useActiveSection(sectionIds, location.pathname === "/");

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
          : "border-border bg-background",
      )}
    >
      <div className="content-frame flex h-16 items-center justify-between gap-6 px-5 md:px-10 lg:h-[4.5rem] lg:px-14">
        <Link
          to="/#band"
          className="shrink-0"
          aria-label="Jack 'n' Roll, na začetek"
        >
          <img
            src={Logo}
            alt=""
            className="h-10 w-auto mix-blend-screen lg:h-12"
          />
        </Link>
        <DesktopNav
          pathname={location.pathname}
          activeSection={activeSection}
        />
        <div className="flex items-center gap-3">
          <SocialLinks className="hidden lg:flex" />
          <MobileMenu
            open={menuOpen}
            pathname={location.pathname}
            activeSection={activeSection}
            onOpenChange={setMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}
