"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Starts when bottom of viewport crosses top of the target
    // ends when top of viewport goes 33% past bottom of the target
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-slate-100 max-w-[42rem] sm:h-[20rem] border border-black/5 dark:border-white/5 overflow-hidden sm:pr-8 relative sm:group-even:pl-8 hover:bg-slate-200 transition-transform rounded-lg dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] dark:bg-[#112] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Image of {title} project"
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-[1rem] shadow-2xl
          group-even:right-[initial]
          group-even:-left-40
          transition-transform
          group-hover:scale-[1.04]

          group-hover:-rotate-2
          group-hover:-translate-x-3
          group-hover:translate-y-3
              
          group-hover:group-even:rotate-2
          group-hover:group-even:translate-x-3

          hidden
          sm:block"
        />
      </section>
    </motion.div>
  );
}
