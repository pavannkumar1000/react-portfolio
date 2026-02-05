import { SiUdemy } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import apexLogo from "../assets/apex-seekers.png";

const certifications = [
  {
    id: 1,
    title: "Udemy Certified Python Course",
    iconType: "icon",
    icon: SiUdemy,
    color: "#A435F0",
    certificate: null,
    certificateStatus: "available", // future upload
  },
  {
    id: 2,
    title: "Python Technical Training Program (Apex Seekers)",
    iconType: "image",
    image: apexLogo,
    certificate: null,
    certificateStatus: "coming", // 👈 IMPORTANT
  },
  {
    id: 3,
    title:
      "Microsoft Certified: Excel, Word & PowerPoint (Beginner to Advanced)",
    iconType: "icon",
    icon: FaMicrosoft,
    color: "#00A4EF",
    certificate: null,
    certificateStatus: "available",
  },
];

export default certifications;
