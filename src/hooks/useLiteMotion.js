import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Returns true when we should favor minimal motion (user preference or small screens).
export default function useLiteMotion() {
  const prefersReducedMotion = useReducedMotion();
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const update = () => setIsNarrowScreen(mediaQuery.matches);

    update();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(update);
      return () => mediaQuery.removeListener(update);
    }
  }, []);

  return Boolean(prefersReducedMotion || isNarrowScreen);
}
