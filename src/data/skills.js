import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaPython,
  FaJava,
  FaGit,
  FaGithub,
  FaCode,
  FaDatabase,
  FaFigma,
  FaCloud,
  FaAws,
  FaServer
} from "react-icons/fa";

import { 
  SiDjango, 
  SiMysql, 
  SiPostgresql,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiLinux,
  SiTailwindcss
} from "react-icons/si";

const skills = [
  {
    category: "Frontend Development",
    icon: FaReact,
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" }, // Added Tailwind
    ],
  },
  {
    category: "Backend Development",
    icon: FaServer,
    items: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Django REST", icon: SiDjango, color: "#0C4B33" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
  },
  {
    category: "Data & Libraries",
    icon: SiPandas,
    items: [
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Pandas", icon: SiPandas, color: "#150458" },
    ],
  },
  {
    category: "Dev Tools",
    icon: FaGit,
    items: [
      { name: "Git", icon: FaGit, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    category: "Additional Skills",
    icon: FaCode,
    items: [
      { name: "REST APIs", icon: FaCode, color: "#FF6B6B" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "AWS Basics", icon: FaAws, color: "#FF9900" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
];

export default skills;
