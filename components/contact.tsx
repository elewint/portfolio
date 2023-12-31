"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5, "-20%");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mt-[7rem] md:mt-[20rem] scroll-mt-14 sm:scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-800 dark:text-slate-400">
        Please contact me directly using the form below or{" "}
        <a
          href="https://www.linkedin.com/in/eintri/"
          target="_blank"
          className="underline cursor-pointer"
        >
          via LinkedIn
        </a>
        .
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
          className="h-14 rounded-lg borderBlack px-4 focus:outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100  transition-all dark:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 focus:outline-black dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100  transition-all dark:outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
