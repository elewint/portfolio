"use client";

import Image from "next/image";
import React from "react";
import profileImg from "@/public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { headerExperiencesData } from "@/lib/data";

const fadeInHorizontalVariants = {
  initial: { opacity: 0, x: -15 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 1.5 + 0.5 * index, duration: 0.4 },
  }),
};

const fadeInVerticalVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 4 + 0.2 * index, duration: 0.2 },
  }),
};

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className="h-[100vh] flex flex-col justify-center">
      <section
        ref={ref}
        id="home"
        className="max-w-[40rem] text-center scroll-mt-[100rem]"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center px-4 gap-4">
          <div className="relative shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={profileImg}
                alt="Eli Intriligator portrait"
                width="250"
                height="250"
                quality="95"
                priority={true}
                className="h-[9rem] w-[9rem] sm:h-[10rem] sm:w-[10rem] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </motion.div>
            {/* <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span> */}
          </div>
          <div className="text-lg xs:text-xl sm:text-2xl pl-5 xs:pl-6 sm:pl-4 font-bold !leading-[1.5] text-left max-w-[20.5rem] xs:max-w-[25rem] sm:max-w-[28rem]">
            {/*  */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              className="inline-block"
            >
              Hi, I&apos;m Eli.
            </motion.span>{" "}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 1,
              }}
              className="inline"
            >
              <span className="inline-block">I&apos;m a</span>{" "}
              <span className="inline">software engineer</span>{" "}
              <span className="inline">with</span>{" "}
              <span className="inline">experience in:</span>
            </motion.div>
            <ul className="xs:mt-1 list-disc list-inside font-normal text-base xs:text-xl">
              {headerExperiencesData.map((experience, index) => (
                <React.Fragment key={index}>
                  <motion.li
                    variants={fadeInHorizontalVariants}
                    initial="initial"
                    animate="animate"
                    custom={index}
                  >
                    {experience}
                  </motion.li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>

        <motion.h1
          className="text-base xs:text-lg mb-6 sm:mb-9 mt-5 md:mt-8 md:text-xl px-4 font-medium !leading-[1.5]"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.5 }}
        >
          <span>Right now, I&apos;m</span>{" "}
          <span className="font-medium underline">
            seeking Full Stack Engineer roles.
            <div className="hidden sm:inline">
              <br />
            </div>
          </span>{" "}
          <span>If you are hiring, please reach out below.</span>
        </motion.h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
          <motion.a
            className="min-w-[15rem] sm:min-w-auto group bg-slate-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:hover:bg-white/20"
            href="/Resume.pdf"
            download
            variants={fadeInVerticalVariants}
            initial="initial"
            animate="animate"
            custom={0}
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
          </motion.a>
          <motion.div
            variants={fadeInVerticalVariants}
            initial="initial"
            animate="animate"
            custom={1}
          >
            <Link
              href="#contact"
              className="min-w-[15rem] sm:min-w-0 group bg-slate-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
          <div className="flex mt-1 gap-3 sm:mt-0 sm:gap-2">
            <motion.a
              className="bg-slate-900 p-4 text-slate-100 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-white hover:bg-gray-950 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 text-xl"
              href="https://www.linkedin.com/in/eintri/"
              target="_blank"
              variants={fadeInVerticalVariants}
              initial="initial"
              animate="animate"
              custom={2}
            >
              <BsLinkedin />
            </motion.a>
            <motion.a
              className="bg-slate-900 p-4 text-slate-100 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-white hover:bg-gray-950 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 text-xl"
              href="https://github.com/elewint"
              variants={fadeInVerticalVariants}
              initial="initial"
              animate="animate"
              custom={3}
            >
              <BsGithub />
              {/* Note: can also use FaGithubSquare for a square icon */}
            </motion.a>
          </div>
        </div>
      </section>
    </section>
  );
}
