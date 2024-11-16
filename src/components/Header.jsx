/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";

import { X, Menu } from "lucide-react";

export default function Header({ navData }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="dark:bg-background border-divider-secondary dark:text-neutral-dark-primary dark:border-divider-primary text-neutral-light-primary fixed z-[999] w-full border-b-2 bg-white p-4 lg:px-24">
            <div className="flex flex-row items-center justify-between">
                <Link to="home" smooth={true} duration={500} spy={true} offset={0} className="cursor-pointer">
                    <span className="text-[24px] uppercase md:text-3xl">PATRICK LISIECKI</span>
                    <span className="text-3xl text-accent">.</span>
                </Link>

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

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="flex items-center justify-center">
                        <Menu className="h-6 w-6 transition-all duration-300 hover:text-accent" />
                    </button>
                </div>
            </div>

            <nav
                className={`${
                    isOpen ? "left-0" : "-left-[768px] md:-left-[960px]"
                } dark:bg-background fixed top-0 z-[999] flex h-screen w-full items-center justify-center bg-white transition-all duration-300 lg:hidden`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute right-[2rem] top-[2rem] z-[100] flex cursor-pointer items-center justify-center transition-all duration-300 hover:text-accent"
                >
                    <X size={36} />
                </button>

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

Header.propTypes = {
    navData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
