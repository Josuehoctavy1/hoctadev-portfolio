import React, {useState, useEffect} from "react";
import portfolio_website from "../assets/portfolio_website.jpg";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { MdEmail, MdOutlineSettingsApplications } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiReactivex,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
} from "react-icons/gi";
import { DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
export const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      { name: "React Native", icon: <FaReact className="text-cyan-400" /> },
      { name: "Vite", icon: < SiVite className="text-blue-400" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },
      {
        name: "Material UI",
        icon: <GiMaterialsScience className="text-blue-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    title: "Langages",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "Php", icon: <SiPhp className="text-purple-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    ],
  },
  {
    title: "Outills",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
];

// Navigation data
export const navItems = [
  { id: "home", label: "Accueil"},
  { id: "about", label: "A propos" },
  { id: "skills", label: "Compétence" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Témoignages" },
  { id: "contact", label: "Contact" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "PDG, TechStart",
    content:
      '"Hoctavy a fait un travail exceptionnel sur notre site web. Son expertise en développement web et son souci du détail ont vraiment fait la différence."',
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Michael Chen",
    position: "Chef de produit, InnovateCo",
    content:
      '"Travailler avec Hoctavy a été une expérience formidable. Il a su comprendre nos besoins et livrer une application mobile qui dépasse nos attentes."',
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "David Wilson",
    position: "Fondateur, StartupHub",
    content:
      '"Hoctavy a été un atout précieux pour notre équipe. Sa capacité à résoudre les problèmes techniques rapidement et efficacement a grandement contribué au succès de notre projet."',
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

// Portfolio data
export const portfolioItems = [
  {
    title: "Site Web E-commerce",
    category: "Design Web",
    image:
      portfolio_website,
  },
  {
    title: "App Fitness UI",
    category: "Design UI/UX",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    title: "Dashboard Analytique",
    category: "Développement Web",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
  },
];
export const experiences = [
  {
    id: 1,
    company: "HoctaDev",
    logo: <GiSandsOfTime />, // replace with actual logo
    title: "Développeur Web Fullstack & Mobile",
    period: "Janvier 2023 - Present",
    description:
      "En tant que développeur web fullstack freelance, j'ai collaboré avec divers clients pour créer des sites web et applications performants et adaptés à leurs besoins spécifiques.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Php",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    id: 2,
    company: "IENG Group",
    logo: <GiSandsOfTime />, // replace with actual logo
    title: "Agent Back Office",
    period: "Octobre 2023 - Présent",
    description:
      "En tant qu'agent back office chez IENG Group, je gère diverses tâches administratives et de support pour assurer le bon fonctionnement des opérations internes de l'entreprise.",
    skills: ["Gestion des données", "Support administratif", "Communication", "Organisation", "Excel", "Reporting", "Gestion d'équipe" ],
  },
  {
    id: 3,
    company: "KAN Group",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Développeur Web Fullstack",
    period: "Juin 2022 - Juillet 2023",
    description:
      "Chez KAN Group, j'ai participé au développement et à la maintenance de plusieurs applications web, en mettant l'accent sur la création d'interfaces utilisateur intuitives et de solutions backend robustes.",
    skills: ["HTML", "CSS", "JavaScript", "Php", "MySQL"],
  },
];
