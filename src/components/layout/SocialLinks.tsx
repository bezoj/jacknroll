import type { SVGProps } from "react";
import { socialLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M14.2 8.4h2.3V5.4h-2.3c-2.2 0-3.7 1.4-3.7 3.7v1.7H8.2v3h2.3V20h3.1v-6.2h2.4l.4-3h-2.8V9.3c0-.6.3-.9 1.6-.9z" />
    </svg>
  );
}

const icons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
} as const;

interface SocialLinksProps {
  labelled?: boolean;
  className?: string;
}

export function SocialLinks({ labelled = false, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socialLinks.map((link) => {
        const Icon = icons[link.label];
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labelled ? undefined : link.label}
              className={cn(
                "inline-flex items-center border border-foreground/30 text-foreground transition-colors hover:bg-foreground hover:text-background",
                labelled ? "h-11 gap-3 px-4" : "h-11 w-11 justify-center"
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
