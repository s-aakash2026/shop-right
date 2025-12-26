import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    // Locomotive Scroll has been removed
    // Standard scroll with GSAP ScrollTrigger is used instead
    ScrollTrigger.refresh();
  }, [start]);
}
