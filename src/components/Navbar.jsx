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
    <nav className="fixed z-[999] w-full bg-white p-8 shadow-bs">
      <div className="container mx-auto flex flex-row items-center justify-between">
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
                    className="mx-4 transition-all duration-300 hover:text-accent"
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
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center"
          >
            {/* <FontAwesomeIcon icon={faBarsStaggered} className="w-6 h-6" /> */}
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 transition-all duration-300 hover:text-accent"
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
        } fixed left-0 top-0 z-[999] flex h-screen w-full items-center justify-center bg-white lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="text-primary transition-all duration-300 hover:text-accent"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-xmark"
            className="absolute right-[4rem] top-[2rem] z-[100] h-8 w-8 cursor-pointer"
          />
        </button>

        {/* Links for mobile menu */}
        <ul className="flex min-w-[150px] flex-col gap-y-8">
          {navData.map((item, index) => {
            return (
              <li
                key={index}
                onClick={toggleMenu}
                className="flex items-center justify-center"
              >
                <a
                  href={item.link}
                  className="text-2xl font-semibold transition-all duration-300 hover:text-accent"
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
