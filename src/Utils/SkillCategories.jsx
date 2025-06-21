import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaPhp,
    FaGitAlt,
  } from "react-icons/fa";
  import {
    SiTailwindcss,
    SiDjango,
    SiCplusplus,
  } from "react-icons/si";
  
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "PHP", icon: <FaPhp className="text-purple-600" /> },
        { name: "Django", icon: <SiDjango className="text-green-800" /> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
        { name: "C++", icon: <SiCplusplus className="text-indigo-600" /> },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      ],
    },
  ];
  
  export default skillCategories;
  