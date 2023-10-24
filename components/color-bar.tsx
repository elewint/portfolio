"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type ColorBarProps = {
  bar_colors: string[];
};

export default function ColorBar({ bar_colors }: ColorBarProps) {
  return (
    <section className="w-[100vw] md:mt-[10%]">
      <div className="flex justify-center">
        <div
          // initial={{ opacity: "80%" }}
          // animate={{ opacity: "40%" }}
          // transition={{
          //   repeat: Infinity,
          //   repeatType: "mirror",
          //   duration: 4,
          //   ease: "linear",
          // }}
          className={clsx(
            "opacity-70 dark:opacity-60 -z-11 h-[20rem] w-[40rem] rounded-[2rem] blur-[10rem] dark:bg-[#946263]",
            bar_colors[1]
          )}
        ></div>
      </div>
      <div className="flex justify-center">
        <div
          // initial={{ opacity: "30%" }}
          // animate={{ opacity: "80%" }}
          // transition={{
          //   repeat: Infinity,
          //   repeatType: "mirror",
          //   duration: 4,
          //   ease: "linear",
          // }}
          className={clsx(
            "opacity-80 dark:opacity-60 -z-10 h-[20rem] w-[35rem] rounded-[2rem] blur-[10rem] right-[50%]",
            bar_colors[0]
          )}
        ></div>
        <div
          // initial={{ opacity: "80%" }}
          // animate={{ opacity: "40%" }}
          // transition={{
          //   repeat: Infinity,
          //   repeatType: "mirror",
          //   duration: 4,
          //   ease: "linear",
          // }}
          className={clsx(
            "opacity-70 dark:opacity-60 -z-12 h-[20rem] w-[35rem] rounded-[2rem] blur-[10rem] left-[50%]",
            bar_colors[2]
          )}
        ></div>
      </div>
    </section>
  );
}
