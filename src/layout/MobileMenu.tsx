import { Link } from "react-router-dom";
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
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { isItemActive } from "./is-item-active";
import { SocialLinks } from "./SocialLinks";

interface MobileMenuProps {
  open: boolean;
  pathname: string;
  activeSection: string;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({
  open,
  pathname,
  activeSection,
  onOpenChange,
}: MobileMenuProps) {
  const close = () => onOpenChange(false);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
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
          onClick={close}
          className="inline-block"
          aria-label="Jack 'n' Roll, na začetek"
        >
          <img src={Logo} alt="" className="h-14 w-auto mix-blend-screen" />
        </Link>
        <nav className="mt-12 flex flex-col" aria-label="Mobilni meni">
          {navItems.map((item) => {
            const active = isItemActive(item.id, pathname, activeSection);
            return (
              <Link
                key={item.id}
                to={item.href}
                onClick={close}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "border-b border-border py-4 font-display text-5xl leading-none tracking-wide text-foreground/75 transition-colors hover:text-foreground",
                  active && "text-foreground",
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
  );
}
