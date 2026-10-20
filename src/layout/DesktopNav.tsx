import { Link } from "react-router-dom";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { isItemActive } from "./is-item-active";

interface DesktopNavProps {
  pathname: string;
  activeSection: string;
}

export function DesktopNav({ pathname, activeSection }: DesktopNavProps) {
  return (
    <nav className="hidden items-center gap-7 lg:flex" aria-label="Glavni meni">
      {navItems.map((item) => {
        const active = isItemActive(item.id, pathname, activeSection);
        return (
          <Link
            key={item.id}
            to={item.href}
            aria-current={active ? "true" : undefined}
            className={cn(
              "relative py-2 font-condensed text-[13px] uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:text-foreground",
              active && "text-foreground",
            )}
          >
            {item.label}
            <span
              className={cn(
                "absolute bottom-0 left-0 h-px bg-foreground transition-all duration-300",
                active ? "w-full" : "w-0",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
