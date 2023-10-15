"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] px-5 leading-8 sm:mb-40 scroll-mt-28 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.17 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I got my start in software engineering at the University of Maryland,
        College Park, where I graduated with a B.S. in Computer Science in May
        2021. I'm currently working as a Software Engineer at Microsoft.
      </p>
      <p>If you want to get in touch, feel free to reach out.</p>
    </motion.section>
  );
}
