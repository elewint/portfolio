"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import placeholderImg from "@/public/placeholder1.png";
import placeholderImg2 from "@/public/placeholder2.png";

export default function About() {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <motion.section
      ref={ref}
      className="mt-[35%] scroll-mt-14 sm:scroll-mt-28 max-w-[45rem] px-5 leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.17 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex gap-5">
        <p className="mb-3">
          I got my start in software engineering at the University of Maryland,
          College Park, where I graduated with a B.S. in Computer Science in May
          2021. I'm currently working as a Software Engineer at Microsoft. I
          want this to be a longer section so I'm saying the same thing again. I
          got my start in software engineering at the University of Maryland,
          College Park, where I graduated with a B.S. in Computer Science in May
          2021.
          <p>If you want to get in touch, feel free to reach out.</p>
        </p>
        <div className="w-[20rem] flex-shrink-0">
          <Image
            src={placeholderImg}
            alt="placeholder"
            quality={95}
            width={150}
            height={150}
            className="absolute w-[20rem] h-[20rem] rounded-t-lg shadow-xl"
          />
          <Image
            src={placeholderImg2}
            alt="placeholder 2"
            quality={95}
            width={150}
            height={150}
            className="absolute object-cover object-right mx-[5.5rem] mt-[7.5rem] w-[17rem] h-[17rem] rounded-t-lg shadow-xl"
          />
        </div>
      </div>
    </motion.section>
  );
}
