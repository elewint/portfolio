"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

const themeSwitchVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 5.2,
      type: "spring",
      stiffness: 380,
      damping: 60,
    },
  },
};

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.section
      variants={themeSwitchVariants}
      initial="initial"
      animate="animate"
      className="fixed flex right-0 bottom-0"
    >
      <motion.button
        onClick={toggleTheme}
        layout
        className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl rounded-full flex justify-center items-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-slate-950"
        // className="w-[3rem] h-[3rem]"
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </motion.button>
    </motion.section>
  );
}
