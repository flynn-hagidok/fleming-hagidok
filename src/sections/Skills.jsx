import ScrollReveal from "../components/ui/ScrollReveal";
import { skillCategories } from "../data/skills";

const Skills = () => {
    return (
        <section className="mx-auto max-w-7xl px-6 lg:px-0 py-16 lg:py-24">

            {/* Heading section */}
            <div className="text-center space-y-3">
                <span className="text-sm font-semibold uppercase tracking-widest text-[#0D9488]">
                    My Expertise
                </span>

                <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172A]">
                    My Skills
                </h2>

                <p className="max-w-2xl mx-auto text-sm lg:text-base text-[#64748B]">
                    Technologies and tools I use to build modern,
                    responsive, and user-friendly web applications.
                </p>
            </div>

            {/* Skills Categories */}
            <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                        >

                            {/* Category heading */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-1.5 h-7 rounded-full bg-[#0D9488]"></span>

                                <h3 className="text-xl font-bold text-[#0F172A]">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skill cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

                                {category.skills.map((skill) => {
                                    const Icon = skill.icon;

                                    return (
                                        <div
                                            key={skill.id}
                                            className="group flex flex-col items-center justify-center gap-3 min-h-28 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0D9488] hover:bg-white hover:shadow-md"
                                        >
                                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#0D9488] shadow-sm transition-all duration-300 group-hover:bg-[#0D9488] group-hover:text-white">
                                                <Icon size={27} />
                                            </div>

                                            <p className="text-sm font-semibold text-[#334155] text-center group-hover:text-[#0D9488] transition-colors">
                                                {skill.name}
                                            </p>
                                        </div>
                                    );
                                })}

                            </div>
                        </div>
                    ))}

                </div>
            </ScrollReveal>

        </section>
    );
};

export default Skills;