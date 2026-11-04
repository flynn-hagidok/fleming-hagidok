import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiVite, SiFirebase } from "react-icons/si";

export const skillCategories = [
    {
        id: 1,
        title: "Frontend Development",
        skills: [
            { id: 1, name: "HTML5", icon: FaHtml5 },
            { id: 2, name: "CSS3", icon: FaCss3Alt },
            { id: 3, name: "JavaScript", icon: FaJs },
            { id: 4, name: "React", icon: FaReact },
            { id: 5, name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        id: 2,
        title: "Backend Development",
        skills: [
            { id: 1, name: "Node.js", icon: FaNodeJs },
            { id: 2, name: "Express.js", icon: SiExpress },
            { id: 3, name: "MongoDB", icon: SiMongodb },
            { id: 4, name: "Firebase", icon: SiFirebase  },
        ],
    },
    {
        id: 3,
        title: "Tools & Technologies",
        skills: [
            { id: 1, name: "Git", icon: FaGitAlt },
            { id: 2, name: "GitHub", icon: FaGithub },
            { id: 3, name: "Vite", icon: SiVite },
        ],
    },
];