/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-scroll";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Nav links
const navData = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "About",
        link: "#about",
    },
    {
        title: "Skills",
        link: "#skills",
    },
    {
        title: "Projects",
        link: "#projects",
    },
    {
        title: "Contact",
        link: "#contact",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="dark:border-divider fixed z-[999] w-full border-b-2 border-secondary bg-white p-4 px-24 text-dark dark:bg-dark dark:text-primary">
            <div className="flex flex-row items-center justify-between">
                {/* Name */}
                <Link to="home" smooth={true} duration={500} spy={true} offset={0} className="cursor-pointer">
                    <span className="text-[24px] uppercase md:text-3xl">PATRICK LISIECKI</span>
                    <span className="text-3xl text-accent">.</span>
                </Link>

                {/* Nav links */}
                <nav className="hidden lg:block">
                    <ul className="flex flex-row">
                        {navData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={item.link.substring(1)}
                                        smooth={true}
                                        duration={300}
                                        spy={true}
                                        offset={0}
                                        className="mx-4 cursor-pointer"
                                    >
                                        <span className="font-medium transition-all duration-300 hover:text-accent">
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center justify-center">
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 transition-all duration-300 hover:text-accent"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <nav
                className={`${
                    isOpen ? "left-0" : "-left-[768px] md:-left-[960px]"
                } fixed top-0 z-[999] flex h-screen w-full items-center justify-center bg-white transition-all duration-300 dark:bg-darker dark:text-white lg:hidden`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute right-[2rem] top-[2rem] z-[100] flex cursor-pointer items-center justify-center rounded-full p-3 transition-all duration-300 hover:bg-gray-300 hover:text-accent dark:text-white dark:hover:text-accent"
                >
                    <FontAwesomeIcon icon="fa-solid fa-xmark" className="h-8 w-8" />
                </button>

                {/* Links for mobile menu */}
                <ul className="flex min-w-[150px] flex-col gap-y-8">
                    {navData.map((item, index) => {
                        return (
                            <li key={index} onClick={toggleMenu} className="flex items-center justify-center">
                                <a href={item.link}>
                                    <span className="text-2xl font-semibold transition-all duration-300 hover:text-accent">
                                        {item.title}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
