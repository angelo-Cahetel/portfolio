import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function SmoothScroll({ children }) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: true,
    });

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}

export default SmoothScroll;
