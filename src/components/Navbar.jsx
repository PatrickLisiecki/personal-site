/* eslint-disable no-unused-vars */

import { useState } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

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
        <nav className="w-full fixed z-[999] bg-white shadow-bs p-8">
            <div className="container mx-auto flex flex-row justify-between items-center">
                {/* Name / Logo */}
                <a href="#home" className="text-[28px] md:text-3xl">
                    <span className="font-[500]">PATRICK</span>{" "}
                    <span className="font-[500]">LISIECKI</span>
                    <span className="text-accent">.</span>
                </a>

                {/* Nav links */}
                <div className="hidden lg:block">
                    <ul className="flex flex-row">
                        {navData.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        className="mx-4 hover:text-accent transition-all duration-300"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="flex justify-center items-center">
                        {/* <FontAwesomeIcon icon={faBarsStaggered} className="w-6 h-6" /> */}
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 hover:text-accent transition-all duration-300"
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
            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } lg:hidden w-full h-screen fixed top-0 left-0 z-[999] flex justify-center items-center bg-white`}
            >
                <button
                    onClick={toggleMenu}
                    className="text-primary hover:text-accent transition-all duration-300"
                >
                    <FontAwesomeIcon
                        icon="fa-solid fa-xmark"
                        className="w-8 h-8 absolute top-[2rem] right-[4rem] cursor-pointer z-[100]"
                    />
                </button>

                {/* Links for mobile menu */}
                <ul className="min-w-[150px] flex flex-col gap-y-8">
                    {navData.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={toggleMenu}
                                className="flex justify-center items-center"
                            >
                                <a
                                    href={item.link}
                                    className="text-2xl font-semibold hover:text-accent transition-all duration-300"
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
