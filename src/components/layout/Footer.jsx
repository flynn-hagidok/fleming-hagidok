import { socialLinks } from "../../data/socials";
import { navItems } from "../../data/navigation";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="bg-[#0F172A] text-white">

            <div className="mx-auto max-w-7xl px-6 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* brand */}
                    <div>
                        <a href="#home" className="text-2xl font-bold">
                            Fleming<span className="text-[#0D9488]">.Dev</span>
                        </a>

                        <p className="text-slate-400 mt-4 leading-7 max-w-sm">
                            I'm a passionate Full-Stack Web Developer
                            focused on building modern, responsive,
                            and user-friendly web applications.
                        </p>
                    </div>

                    {/* quick links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-5">
                            Quick Links
                        </h2>
                        
                        <ul className="space-y-3">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="text-slate-400 hover:text-[#0D9488] transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* social links */}
                    <div>
                        <h2 className="text-lg font-semibold mb-5">
                            Follow Me
                        </h2>

                        <p className="text-slate-400 mb-5">
                            Let's connect and build something amazing together.
                        </p>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.id}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.name}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white hover:bg-[#0D9488] transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                </div>

                {/* bottom footer */}
                <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-sm text-slate-400 text-center">
                        © 2026 Fleming.Dev. All rights reserved.
                    </p>

                    <a
                        href="#home"
                        aria-label="Back to top"
                        className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#0D9488] transition-colors"
                    >
                        Back to Top
                        <FaArrowUp />
                    </a>

                </div>

            </div>
        </footer>
    );
};

export default Footer;