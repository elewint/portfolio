"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { HiMenu } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import useWindowWidth from "@/lib/use_window_width";

const navBarAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 5,
      type: "spring",
      stiffness: 380,
      damping: 60,
    },
  },
  initialMobile: {
    borderRadius: 40,
  },
  animateMobile: {
    borderRadius: 40,
  },
  animateMobileExpanded: {
    borderRadius: 20,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { width } = useWindowWidth();
  const sm_breakpoint = 640;
  const small_screen = width && width < sm_breakpoint;
  const [justExpanded, setJustExpanded] = useState(true);
  const [closeButton, setCloseButton] = useState(false);

  return (
    <header className="flex justify-end z-[999] relative">
      <motion.section
        variants={navBarAnimationVariants}
        initial="initial"
        animate="animate"
        className="fixed"
      >
        {small_screen && (
          <motion.a
            className="flex items-center justify-center fill-none top-3 right-3 fixed z-[1000] w-[3rem] h-[3rem] rounded-full sm:hidden text-xl"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
              if (!isNavExpanded) {
                setJustExpanded(true);
              }
            }}
            variants={{
              animate: { transition: { duration: 5 } },
            }}
            animate="animate"
          >
            {isNavExpanded ? <VscChromeClose /> : <HiMenu />}
          </motion.a>
        )}
        <motion.div
          className={clsx(
            "flex items-center justify-center fixed top-3 right-3 sm:top-5 sm:right-5 w-[3rem] h-[3rem] sm:w-[7rem] sm:h-[16rem] border border-white border-opacity-40 sm:!rounded-[1rem] bg-white bg-opacity-80 shadow-lg shadow-black/[0.06] backdrop-blur-[0.5rem] dark:bg-slate-950 dark:border-black/40 dark:bg-opacity-75",
            { "!w-[7rem] !h-[13rem]": small_screen && isNavExpanded }
          )}
          variants={navBarAnimationVariants}
          initial={small_screen ? "initialMobile" : false}
          animate={
            !small_screen
              ? false
              : isNavExpanded
              ? "animateMobileExpanded"
              : "animateMobile"
          }
          layout
          custom={small_screen}
        >
          <motion.nav layout>
            {(isNavExpanded || !small_screen) && (
              <ul className="pt-4 sm:pt-0 flex flex-col text-[0.9rem] font-medium text-slate-500 gap-2 sm:gap-5">
                {links.map((link) => (
                  <li className="relative" key={link.hash}>
                    <Link
                      className={clsx(
                        "flex items-center w-full px-3 hover:text-gray-950 transition-transform dark:text-slate-500 dark:hover:text-slate-300",
                        {
                          "text-gray-950 dark:!text-[#f1f5f9]":
                            activeSection === link.name,
                        }
                      )}
                      href={link.hash}
                      onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }}
                    >
                      {link.name}

                      {link.name === activeSection && (
                        <motion.span
                          className={clsx(
                            "h-full w-1 rounded-full absolute left-[0.1rem] right-0 bottom-0 top-0 -z-10 !bg-opacity-80 backdrop-blur-[0.2rem]",
                            {
                              "bg-amber-500": link.name === "Home",
                            },
                            {
                              "bg-indigo-500 dark:bg-blue-400":
                                link.name === "About",
                            },
                            { "bg-emerald-500": link.name === "Experience" },
                            { "bg-purple-500": link.name === "Skills" },
                            {
                              "bg-red-500": link.name === "Projects",
                            },
                            { "bg-blue-500": link.name === "Contact" }
                          )}
                          variants={{
                            animate: {
                              transition: {
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              },
                            },
                          }}
                          animate="animate"
                          initial={false}
                          layoutId="activeSection"
                          onAnimationComplete={() => {
                            setJustExpanded(false);
                          }}
                        ></motion.span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </motion.nav>
        </motion.div>
      </motion.section>
    </header>
  );
}
