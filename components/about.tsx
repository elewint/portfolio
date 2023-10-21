"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] mt-[20rem] px-5 leading-8 scroll-mt-28 text-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.17 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I got my start in software engineering at the University of Maryland,
        College Park, where I graduated with a B.S. in Computer Science in May
        2021. I'm currently working as a Software Engineer at Microsoft. I want
        this to be a longer section so I'm saying the same thing again. I got my
        start in software engineering at the University of Maryland, College
        Park, where I graduated with a B.S. in Computer Science in May 2021. I'm
        currently working as a Software Engineer at Microsoft. I want this to be
        a longer section so I'm saying the same thing again. I got my start in
        software engineering at the University of Maryland, College Park, where
        I graduated with a B.S. in Computer Science in May 2021. I'm currently
        working as a Software Engineer at Microsoft. I want this to be a longer
        section so I'm saying the same thing again. I got my start in software
        engineering at the University of Maryland, College Park, where I
        graduated with a B.S. in Computer Science in May 2021. I'm currently
        working as a Software Engineer at Microsoft. I want this to be a longer
        section so I'm saying the same thing again.
      </p>
      <p>If you want to get in touch, feel free to reach out.</p>
    </motion.section>
  );
}
