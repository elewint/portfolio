"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

type ColorBarProps = {
  bar_colors: string[];
};

export default function ColorBar({ bar_colors }: ColorBarProps) {
  return (
    <section>
      <motion.div
        // initial={{ opacity: "30%" }}
        // animate={{ opacity: "80%" }}
        // transition={{
        //   repeat: Infinity,
        //   repeatType: "mirror",
        //   duration: 4,
        //   ease: "linear",
        // }}
        className={clsx(
          "opacity-80 fixed top-[30%] -z-10 h-[60%] sm:h-[30%] w-[150%] rounded-[4rem] blur-[10rem] right-[50%] dark:bg-[#676394]",
          bar_colors[0]
        )}
      ></motion.div>
      <motion.div
        // initial={{ opacity: "80%" }}
        // animate={{ opacity: "40%" }}
        // transition={{
        //   repeat: Infinity,
        //   repeatType: "mirror",
        //   duration: 4,
        //   ease: "linear",
        // }}
        className={clsx(
          "opacity-70 fixed -z-11 h-[30%] w-[150%] -right-[25%] rounded-[4rem] blur-[10rem] dark:bg-[#946263]",
          bar_colors[1]
        )}
      ></motion.div>
      <motion.div
        // initial={{ opacity: "80%" }}
        // animate={{ opacity: "40%" }}
        // transition={{
        //   repeat: Infinity,
        //   repeatType: "mirror",
        //   duration: 4,
        //   ease: "linear",
        // }}
        className={clsx(
          "opacity-70 fixed top-[30%] -z-12 h-[60%] sm:h-[30%] w-[150%] rounded-[4rem] blur-[10rem] left-[50%]",
          bar_colors[2]
        )}
      ></motion.div>
    </section>
  );
}
