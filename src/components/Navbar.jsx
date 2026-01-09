import { Fragment, useEffect, useState } from "react";
import { navItems } from "../data/data";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("home");

    /* Scroll vers la section ciblée */
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    /* Détection de la section active */
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (
                    window.scrollY >= sectionTop - 120 &&
                    window.scrollY < sectionTop + sectionHeight - 120
                ) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Fragment>
            <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/20 transition-all">
                <div className="container mx-auto flex items-center justify-between px-6 py-3">

                    {/* Logo */}
                    <div
                        className="text-2xl font-bold text-outline cursor-pointer"
                        onClick={() => scrollToSection("home")}
                    >
                        HoctaDev.
                    </div>

                    {/* Menu desktop */}
                    <ul className="hidden md:flex space-x-8 text-sm uppercase font-light text-white">
                        {navItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`
                                    cursor-pointer transition-colors duration-200
                                    hover:text-orange-500
                                    ${activeSection === item.id ? "text-orange-400" : ""}
                                `}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>

                    {/* CTA */}
                    <button
                        onClick={() => scrollToSection("contact")}
                        className="ml-4 px-5 py-1.5 rounded-full bg-gradient-to-r
                                   from-orange-500 to-orange-700 text-white
                                   hover:opacity-90 transition-all"
                    >
                        Engagez-moi
                    </button>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
