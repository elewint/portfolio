"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import goldenGateImg from "@/public/goldengate.jpg";
import gradImg from "@/public/graduation.png";

export default function About() {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <section
      ref={ref}
      className="mt-[7rem] md:mt-0 scroll-mt-14 sm:scroll-mt-28 max-w-[45rem] px-5 leading-8"
      id="about"
    >
      <div></div>
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 sm:mr-4">
        <p className="mb-3">
          I studied software engineering at Tufts University, where I graduated
          with a B.S. in Computer Science and Science, Technology, and Society
          in May 2023. Now I&apos;m based in San Francisco, CA, where I am
          pursuing a career as a Full-Stack Engineer. I am always looking for
          new projects and opportunities.{" "}
          <span className="font-medium">
            If you want to work on something together, feel free to reach out!
          </span>
        </p>
        <div className="w-[15rem] xs:w-[20rem] h-[25rem] flex-shrink-0 ml-auto mr-auto">
          <Image
            src={goldenGateImg}
            alt="Golden Gate Bridge"
            quality={95}
            width={150}
            height={150}
            className="absolute sm:-ml-4 w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] rounded-lg shadow-xl"
          />
          <Image
            src={gradImg}
            alt="Graduation"
            quality={95}
            width={150}
            height={150}
            className="absolute object-cover object-right mx-[3.5rem] xs:mx-[7rem] sm:mx-[6rem] mt-[6.5rem] w-[13rem] h-[13rem] sm:w-[16rem] sm:h-[16rem] rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
