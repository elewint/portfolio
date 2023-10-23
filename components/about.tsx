"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import placeholderImg from "@/public/placeholder1.png";
import gradImg from "@/public/graduation.png";

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
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <p className="mb-3">
          I studied software engineering at Tufts University, where I graduated
          with a B.S. in Computer Science and Science, Technology, and Society
          in May 2023. I'm currently working part-time as a Full-Stack Engineer
          at Carmel Research Center, Inc.{" "}
          <span className="font-medium">
            If you want to work together, feel free to reach out.
          </span>
        </p>
        <div className="w-[15rem] xs:w-[20rem] h-[25rem] flex-shrink-0">
          <Image
            src={placeholderImg}
            alt="placeholder"
            quality={95}
            width={150}
            height={150}
            className="absolute w-[15rem] h-[15rem] xs:w-[20rem] xs:h-[20rem] rounded-t-lg shadow-xl"
          />
          <Image
            src={gradImg}
            alt="placeholder 2"
            quality={95}
            width={150}
            height={150}
            className="absolute object-cover object-right mx-[3.5rem] xs:mx-[5rem] mt-[7.5rem] w-[13rem] xs:w-[17rem] h-[13rem] xs:h-[17rem] rounded-t-lg shadow-xl"
          />
        </div>
      </div>
    </motion.section>
  );
}
