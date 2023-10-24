import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { MdLuggage, MdOutlineSensors } from "react-icons/md";
import { RiSparkling2Fill } from "react-icons/ri";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    bullets: [
      "Collaborated with an Agile student team to build a web app for event management, display, and registration, connecting 1000+ families with community programs at the Bergen Family Center.",
      "Implemented 10+ backend components for users to login, filter, and register for relevant events.",
      "Built frontend interface for upcoming events, reducing page load time by 15% with image optimization.",
    ],
    tags: ["React", "Firebase", "CSS", "JavaScript", "Git"],
    icon: React.createElement(BsFillCalendarCheckFill),
    date: "Sep 2021 - May 2022",
  },
  {
    title: "Software Engineer for CS Dept. at Tufts University",
    location: "Medford, MA",
    bullets: [
      "Engineered VR prototype for visualizing high-volume datasets in Unity, a central feature of a $1M project sponsored by the Department of Defense.",
      "Simulated real-time particle systems that dynamically respond to user input, with option to import CSV data.",
    ],
    tags: ["Unity", "C#", "Git"],
    icon: React.createElement(RiSparkling2Fill),
    date: "Mar 2021 - Jan 2022",
  },
  {
    title: "Software Engineer for Human Factors Lab at Tufts University",
    location: "Medford, MA",
    bullets: [
      "Developed VR environment in Unity to envision novel methods of searching airport baggage, deploying customized shaders to simulate realistic scans; research performed in partnership with the Department of Homeland Security.",
      "Engineered simulation of an airport baggage screening console to record user performance metrics across 4 unique hardware devices.",
      "Utilized the simulation to conduct a usability test and optimize UX of airport screening, achieving 20% reduction in baggage search time at major airports.",
    ],
    tags: ["Unity", "C#", "Git"],
    icon: React.createElement(MdLuggage),
    date: "Jun 2020 - Mar 2021",
  },
  {
    title: "Software Engineering Intern at Lexiwave Technology Ltd.",
    location: "Boston, MA",
    bullets: [
      "Developed object-detection algorithm for new radar modules, improving fire safety and climate control systems in several indoor shopping malls as part of a technology partnership with Infineon.",
      "Designed a calibrated state machine to process microwave signals from Doppler radar transceivers.",
    ],
    tags: ["C"],
    icon: React.createElement(MdOutlineSensors),
    date: "May 2019 - Aug 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Sleep Tracker API",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    bullets: [
      "Developed scalable RESTful API for a sleep tracker application, defining 5 endpoints to handle client requests to log sleep data, deliver reports, and analyze trends.",
      "Designed and implemented database with CRUD operations.",
      "Containerized the database, ensuring consistent development and testing environments.",
    ],
    tags: ["Flask", "PostgreSQL", "Docker"],
    imageUrl: corpcommentImg,
  },
  {
    title: "2D Puzzle Platformer Game",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    bullets: [
      "Conceived and pitched game to 50+ students; selected by class vote to manage a dedicated development team.",
      "Led team of 6 in building the game in Unity, including functionality, mechanics, art, and sound design.",
      "Implemented player movement, physics interactions, camera movement, and lighting effects.",
    ],
    tags: ["Unity", "C#"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Network Incident Alarm",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    bullets: [
      "Developed real-time monitoring program to analyze network traffic and alert users about potentially malicious activity, detecting 4 distinct port scans and user credentials sent without encryption.",
    ],
    tags: ["Python"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Image Compressor and Decompressor",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    bullets: [
      "Engineered image compression program, achieving 70% reduction in file size by implementing algorithms for color space conversion, quantization, discrete cosine transform, and bit packing.",
      "Built decompressor to restore compressed images to their original format with minimal 2% information loss.",
    ],
    tags: ["C"],
    imageUrl: wordanalyticsImg,
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
