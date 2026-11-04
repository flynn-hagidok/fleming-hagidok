import React from 'react';

const NavLink = ({ item, activeSection, handleNavClick }) => {

    const isActive = activeSection === item.id;

    return (
        <a
            href={`#${item.id}`}
            aria-current={isActive ? "location" : undefined}
            className={`relative inline-block text-sm font-medium transition-all duration-300
                ${isActive
                    ? "text-[#0D9488]"
                    : "text-slate-700 hover:text-[#0D9488]"
                }`}
            onClick={() => handleNavClick(item.id)}
        >
            {item.label}
            <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-[#0D9488] transition-all duration-300 ${isActive ? "lg:w-full" : "w-0"}`}
            >

            </span>
        </a>
    );
};

export default NavLink;