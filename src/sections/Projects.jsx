import ScrollReveal from '../components/ui/ScrollReveal';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <div className="mx-auto max-w-7xl py-10 px-6 lg:px-0">
            {/* Section Heading */}
            <div className="mb-14 space-y-3 text-center">
                <p className="font-bold tracking-widest text-[#0D9488]">
                    MY PROJECTS
                </p>
                <h2 className="text-3xl font-bold text-[#0F172A] lg:text-4xl">
                    Projects I've Built
                </h2>
                <p className="mx-auto max-w-xl text-[#64748B]">
                    Explore some of my recent projects and the technologies
                    I've used to build them.
                </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(project => (
                    <ScrollReveal key={project.id}>
                        <div className="border rounded-md border-slate-200 shadow">
                            <div className="relative group overflow-hidden">
                                <img src={project.image} alt={project.title}
                                    loading="lazy"
                                    className="h-[350px] w-full object-cover transition-transform transition-500 group-hover:scale-110" />
                                <div className="absolute inset-0 flex items-center justify-center gap-6 bg-[#0F172A]/80 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                                    <a href={project.liveLink} target="_blank"
                                        className="text-white"
                                    >
                                        <FiExternalLink size={30} />
                                    </a>
                                    <a href={project.githubLink} target="_blank"
                                        className="text-white"
                                    >
                                        <FaGithub size={30} />
                                    </a>
                                </div>
                            </div>
                            <div className="px-4 my-4 space-y-2">
                                <h2 className="text-xl font-bold text-[#0F172A]">{project.title}</h2>
                                <p className="text-[#64748B]">{project.description}</p>
                                <div className="flex gap-4">
                                    {
                                        project.technologies.map((tech, index) =>
                                            <p key={index}
                                                className="text-[#0D9488] text-xs px-3 py-1 rounded-md bg-teal-50"
                                            >
                                                {tech}
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};

export default Projects;