/* eslint-disable no-unused-vars */
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navData = [
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
        title: "Home",
        link: "#home",
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-user-astronaut" />,
        title: "About",
        link: "#about",
    },
    {
        icon: <FontAwesomeIcon icon="fa-solid fa-diagram-project" />,
        title: "Projects",
        link: "#projects",
    },
    {
        icon: <FontAwesomeIcon icon="fa-regular fa-message" />,
        title: "Contact",
        link: "#footer",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full fixed z-[999] bg-white shadow-bs p-8 md:p-8">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <a href="#home" className="text-2xl md:text-3xl">
                    <span className="font-[500]">PATRICK</span>{" "}
                    <span className="font-[500]">LISIECKI</span>
                    <span className="text-accent">.</span>
                </a>

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

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-primary">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`${
                    isOpen ? "block" : "hidden"
                } lg:hidden w-full h-screen fixed top-0 left-0 z-[999] flex justify-center items-center bg-white transition-all duration-300 ease-in-out`}
            >
                <button
                    onClick={toggleMenu}
                    className="text-6xl text-primary hover:text-accent transition-all duration-300"
                >
                    <FontAwesomeIcon
                        icon="fa-solid fa-xmark"
                        className="absolute top-[2rem] right-[4rem] cursor-pointer z-[100]"
                    />
                </button>

                <ul className="flex flex-col gap-y-8">
                    {navData.map((item, index) => {
                        return (
                            <li key={index} onClick={toggleMenu} className="text-center">
                                <a
                                    href={item.link}
                                    className="text-2xl hover:text-accent transition-all duration-300"
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
