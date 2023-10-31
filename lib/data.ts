import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdLuggage, MdOutlineSensors } from "react-icons/md";
import { RiSparkling2Fill } from "react-icons/ri";
import gameImg from "@/public/game.jpg";
import securityImg from "@/public/security_alarm.jpg";
import turingCompressedImg from "@/public/turing_compressed.jpg";
import sleepTrackerImg from "@/public/sleep_tracker.jpg";

export const headerExperiencesData = [
  "full stack development 🥞",
  "visualization 📊",
  "virtual reality 🥽",
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Engineer for Tufts JumboCode",
    location: "Medford, MA",
    description:
      "I collaborated with an Agile student team to build a web app for event management, display, and registration, connecting 1000+ families with community programs at the Bergen Family Center.",
    tags: ["React", "Firebase", "CSS", "JavaScript", "Git"],
    icon: React.createElement(BsFillCalendarCheckFill),
    date: "Sep 2021 - May 2022",
  },
  {
    title: "Software Engineer for CS Dept. at Tufts University",
    location: "Medford, MA",
    description:
      "I developed a VR prototype for visualizing high-volume datasets in Unity, a central feature of a $1M project sponsored by the Department of Defense.",
    tags: ["Unity", "C#", "Git"],
    icon: React.createElement(RiSparkling2Fill),
    date: "Mar 2021 - Jan 2022",
  },
  {
    title: "Software Engineer for Human Factors Lab at Tufts University",
    location: "Medford, MA",
    description:
      "I engineered a cross-platform simulation of an airport baggage screening console to conduct a usability test and optimize the UX of airport screening, achieving a 20% reduction in baggage search time at major airports.",
    tags: ["Unity", "C#", "Git"],
    icon: React.createElement(MdLuggage),
    date: "Jun 2020 - Mar 2021",
  },
  {
    title: "Software Engineering Intern at Lexiwave Technology Ltd.",
    location: "Boston, MA",
    description:
      "I developed an object-detection algorithm for new Infineon radar modules, improving fire safety and optimizing climate control systems in indoor shopping malls.",
    tags: ["C"],
    icon: React.createElement(MdOutlineSensors),
    date: "May 2019 - Aug 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Sleep Tracker API",
    description:
      "I developed a scalable RESTful API for a sleep tracker application to handle client requests to log sleep data, deliver reports, and analyze trends. I also implemented and containerized the CRUD database.",
    tags: ["Flask", "PostgreSQL", "Docker"],
    imageUrl: sleepTrackerImg,
  },
  {
    title: "Puzzle Platformer",
    description:
      "I led a team of 6 in building a 2D game in Unity. I developed the game's player movement, physics interactions, camera movement, and lighting effects.",
    tags: ["Unity", "C#"],
    imageUrl: gameImg,
  },
  {
    title: "Network Incident Alarm",
    description:
      "I developed a real-time monitoring program to analyze network traffic and alert users about potentially malicious activity.",
    tags: ["Python"],
    imageUrl: securityImg,
  },
  {
    title: "Image Compressor and Decompressor",
    description:
      "I engineered an image compression program to reduce file size by 70%, and a decompressor to restore images with minimal information loss.",
    tags: ["C"],
    imageUrl: turingCompressedImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "CSS",
  "HTML",
  "Python",
  "C++",
  "C#",
  "C",
  "SQL",
  "Bash",
  "React",
  "Next.js",
  "Tailwind",
  "Docker",
  "Git",
  "Flask",
  "RESTful API",
  "Agile Development",
  "PostgreSQL",
  "Firebase",
  "Framer Motion",
  "Unity",
  "Xcode",
  "Visual Studio Code",
  "GDB",
  "Wireshark",
  "Vim",
] as const;
