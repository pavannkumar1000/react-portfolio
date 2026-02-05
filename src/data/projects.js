import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiDjango,
  SiPostgresql,
  SiThemoviedatabase,
  SiNetlify,
  SiSqlite,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Full-Stack E-Commerce Application",
    description:
      "A complete full-stack e-commerce platform with user authentication (login & signup), product management, cart functionality, and admin dashboard. Backend is built using Django REST Framework, frontend using React with Bootstrap, and PostgreSQL as the database.",
    tech: [
      { name: "React", icon: FaReact, color: "#00D8FF" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#8A4FFF" },
      { name: "Django REST Framework", icon: SiDjango, color: "#00FF7F" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#1E90FF" },
    ],
    live: "https://drive.google.com/file/d/1uCbQ_j6WGj0zoYl3zyUstgc8czERUIRt/view?usp=drivesdk",
  },
  {
    id: 2,
    title: "Bus Booking Application",
    description:
      "A full-stack bus booking application with seat selection, booking history, and user authentication. Backend is built with Django REST Framework and SQLite, frontend using React and Tailwind CSS, including real-time seat booking functionality.",
    tech: [
      { name: "React", icon: FaReact, color: "#00D8FF" },
      { name: "Tailwind CSS", icon: FaCss3Alt, color: "#1E90FF" },
      { name: "Django REST Framework", icon: SiDjango, color: "#00FF7F" },
      { name: "SQLite", icon: SiSqlite, color: "#00FFC0" }, // brighter teal for visibility
    ],
    live: "https://drive.google.com/file/d/1XYHzzuMYhtj2-2q_qhZGZIhuNMa4WrSd/view?usp=drivesdk",
  },
  {
    id: 3,
    title: "Open Library Platform",
    description:
      "An open digital library where anyone can read stories and books in PDF or text format. Users can upload content, while admins have full CRUD access to manage all library resources.",
    tech: [
      { name: "React", icon: FaReact, color: "#00D8FF" },
      { name: "Django REST Framework", icon: SiDjango, color: "#00FF7F" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#1E90FF" },
    ],
    live: "https://open-library-8bpg.onrender.com",
  },
  {
    id: 4,
    title: "Movie App (TMDB)",
    description:
      "A React-based movie application that fetches real-time movie data from the TMDB API. Users can browse popular movies, view details, and search for films. Deployed using Netlify.",
    tech: [
      { name: "React", icon: FaReact, color: "#00D8FF" },
      { name: "TMDB API", icon: SiThemoviedatabase, color: "#00BFFF" },
      { name: "Netlify", icon: SiNetlify, color: "#00E5C4" },
    ],
    live: "https://react-movie-app-using-tmdb-api.netlify.app/",
  },
  {
    id: 5,
    title: "My Other Projects",
    description: "It contains 5 small projects using HTML, CSS, and JavaScript only",
    tech: [
      { name: "HTML", icon: FaHtml5, color: "#FF4500" },
      { name: "CSS", icon: FaCss3Alt, color: "#1E90FF" },
      { name: "JavaScript", icon: FaJs, color: "#FFD700" },
    ],
    live: "https://pavannkumar1000.github.io/mini_projects_page/",
  },
];

export default projects;
