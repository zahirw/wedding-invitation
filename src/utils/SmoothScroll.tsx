"use client";
// components/SmoothScroll.tsx

import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
ScrollTrigger.config({ limitCallbacks: true });
const SmoothScroll = () => {
  useEffect(() => {
    // Register plugin
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Init ScrollSmoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      // normalizeScroll: true,
      smooth: 0.5,
      effects: true,
    });
  }, []);

  return null;
};

export default SmoothScroll;
