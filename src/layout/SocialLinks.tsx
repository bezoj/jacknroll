import { socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { socialIcons } from "@/components/icons";

interface SocialLinksProps {
  labelled?: boolean;
  className?: string;
}

export function SocialLinks({ labelled = false, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socialLinks.map((link) => {
        const Icon = socialIcons[link.label];
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labelled ? undefined : link.label}
              className={cn(
                "inline-flex items-center border border-foreground/30 text-foreground transition-colors hover:bg-foreground hover:text-background",
                labelled ? "h-11 gap-3 px-4" : "h-11 w-11 justify-center",
              )}
            >
              <Icon className="h-4 w-4" />
              {labelled ? (
                <span className="font-condensed text-xs uppercase tracking-[0.18em]">
                  {link.label}
                </span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
