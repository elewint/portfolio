import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdLuggage, MdOutlineSensors } from "react-icons/md";
import { RiSparkling2Fill } from "react-icons/ri";
import gameImg from "@/public/game.jpg";
import securityImg from "@/public/security_alarm.jpg";
import turingCompressedImg from "@/public/turing_compressed.jpg";
import sleepTrackerImg from "@/public/sleep_tracker.jpg";
import { FaRocket } from "react-icons/fa";

export const headerExperiencesData = [
  "strong CS fundamentals 🧑‍💻",
  "stellar attention to detail 🔍",
  "a passion for problem-solving 🧩",
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
    title: "Web Engineer",
    location: "Santa Monica, CA",
    description:
      "I built and launched a professional website for a space physics company, enabling researchers to share findings with 20+ collaborators and advertise services to industry clients.",
    tags: ["WordPress", "HTML", "CSS"],
    icon: React.createElement(FaRocket),
    date: "Sep 2023 - Present",
  },
  {
    title: "Full Stack Engineer at Tufts JumboCode",
    location: "Medford, MA",
    description:
      "I collaborated with an Agile team of 10 to develop and ship an event management web app for a human services nonprofit, connecting 1000+ families to vital community programs.",
    tags: ["React", "JavaScript", "CSS", "Firebase", "Git", "Jira"],
    icon: React.createElement(BsFillCalendarCheckFill),
    date: "Sep 2021 - May 2022",
  },
  {
    title:
      "Software Engineering Intern in Computer Science Research Lab at Tufts University",
    location: "Medford, MA",
    description:
      "I architected and developed 3 VR prototypes to test new techniques for high-dimensional data analysis – core deliverables for a $1M research project funded by the Department of Defense.",
    tags: ["Unity", "C#", "Git"],
    icon: React.createElement(RiSparkling2Fill),
    date: "Mar 2021 - Jan 2022",
  },
  {
    title:
      "Software Engineering Intern in Human Factors Research Lab at Tufts University",
    location: "Medford, MA",
    description:
      "I helped drive a 20% reduction in TSA baggage search time at Logan Airport by building a bag screening simulator for usability testing, improving the travel experience for 17M passengers each year.",
    tags: ["Unity", "C#", "Git"],
    icon: React.createElement(MdLuggage),
    date: "Jun 2020 - Mar 2021",
  },
  {
    title: "Software Engineering Intern at Lexiwave Technology Ltd.",
    location: "Boston, MA",
    description:
      "I enhanced fire safety and climate control systems in 3 indoor shopping malls by designing and fine-tuning a presence-detection algorithm for new 24 GHz Doppler radar modules.",
    tags: ["C", "Git"],
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
