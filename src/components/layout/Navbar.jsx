import React, { useEffect, useRef, useState } from 'react';
import { navItems } from "../../data/navigation"
import NavLink from "../ui/NavLink";
import { FiArrowUpRight } from 'react-icons/fi';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {

    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const sections = navItems
            .map(item => document.getElementById(item.id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            entries => entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            }),
            {
                rootMargin: "-35% 0px -55% 0px"
            }
        )
        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect()
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])

    const handleNavClick = (id) => {
        setActiveSection(id);
        setMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-md">
            <nav className="mx-auto flex h-20 max-w-7xl justify-between items-center px-4 xl:px-0">
                {/* logo section */}
                <a
                    href="#home"
                    onClick={() => handleNavClick("home")}
                >
                    <span className="font-bold text-xl xl:text-3xl text-[#0F172A]">Fleming</span>
                    <span className="text-[#0D9488] text-md font-semibold xl:text-xl">.Dev</span>
                </a>

                {/* desktop navigation */}
                <div className="xl:flex items-center gap-10 hidden">
                    {
                        navItems.map(item =>
                            <NavLink
                                key={item.id}
                                item={item}
                                activeSection={activeSection}
                                handleNavClick={handleNavClick}
                            />
                        )
                    }
                </div>

                {/* desktop btn */}
                <a
                    href="#contact"
                    onClick={() => setActiveSection("contact")}
                    className="bg-[#0D9488] xl:flex items-center gap-2 rounded-md font-semibold px-4 py-2 text-[#ffff] hidden"
                >
                    Let's Talk
                    <FiArrowUpRight size={18} />
                </a>

                {/* mobile btn */}
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="xl:hidden"
                >
                    {
                        menuOpen ? (
                            <HiX size={28} />
                        ) : (
                            <HiMenuAlt3 size={28} />
                        )
                    }
                </button>
            </nav>

            {/* mobile navigation */}
            {
                menuOpen && (
                    <div
                        ref={menuRef}
                        id="mobile-navigation"
                        className="border-t border-slate-100 bg-white px-6 py-6 xl:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {
                                navItems.map(item =>
                                    <NavLink
                                        key={item.id}
                                        item={item}
                                        activeSection={activeSection}
                                        handleNavClick={handleNavClick}
                                    />
                                )
                            }
                        </div>

                        <a
                            href="#contact"
                            onClick={() => handleNavClick("contact")}
                            className="bg-[#0D9488] flex items-center gap-2 mt-4 rounded-md font-semibold px-4 py-2 text-[#ffff]"
                        >
                            Let's Talk
                            <FiArrowUpRight size={18} />
                        </a>
                    </div>
                )
            }
        </header>
    );
};

export default Navbar;