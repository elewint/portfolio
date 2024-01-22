"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ColorGradient() {
  return (
    <motion.section
      className="flex flex-col items-center absolute justify-center -z-10 w-[100vw] md:mt-[10%] rounded-[6rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="bg-blue-300 dark:bg-[#946263] opacity-70 dark:opacity-60 h-[20rem] w-[40rem]"></div>
      <div className="flex items-center">
        <div className="bg-amber-200 opacity-80 dark:opacity-60 h-[20rem] w-[35rem]"></div>
        <div className="bg-orange-300 opacity-70 dark:opacity-60 h-[20rem] w-[35rem]  blur-[10rem]"></div>
      </div>
    </motion.section>
  );
}
