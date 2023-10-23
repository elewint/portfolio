"use client";

import React from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/active-section-context";
import ColorBar from "./color-bar";

export default function ColorBarManager() {
  const { activeSection } = useActiveSectionContext();
  return (
    <section>
      <AnimatePresence>
        {activeSection === "Home" && (
          <motion.section
            className="fixed -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <ColorBar
              bar_colors={["bg-blue-300", "bg-amber-200", "bg-orange-300"]}
            />
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeSection === "About" && (
          <motion.section
            className="fixed -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <ColorBar
              bar_colors={["bg-violet-300", "bg-sky-300", "bg-indigo-300"]}
            />
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeSection === "Experience" && (
          <motion.section
            className="fixed -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <ColorBar
              bar_colors={["bg-indigo-300", "bg-lime-200", "bg-emerald-300"]}
            />
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeSection === "Skills" && (
          <motion.section
            className="fixed -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <ColorBar
              bar_colors={["bg-blue-300", "bg-purple-300", "bg-fuchsia-300"]}
            />
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeSection === "Projects" && (
          <motion.section
            className="fixed -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <ColorBar
              bar_colors={["bg-yellow-300", "bg-lime-300", "bg-orange-300"]}
            />
          </motion.section>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeSection === "Contact" && (
          <motion.section
            className="fixed -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            <ColorBar
              bar_colors={["bg-cyan-300", "bg-sky-300", "bg-blue-300"]}
            />
          </motion.section>
        )}
      </AnimatePresence>
    </section>
  );
}
