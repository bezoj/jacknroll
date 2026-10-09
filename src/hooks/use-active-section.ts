import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[], enabled: boolean) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!enabled) return;

    const update = () => {
      const marker = window.innerHeight * 0.35;
      let current = ids[0] ?? "";

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled, ids]);

  return active;
}
