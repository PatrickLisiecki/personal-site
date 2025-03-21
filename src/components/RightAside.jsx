import PropTypes from "prop-types";

import { ScrollText, Sun, Moon, Linkedin, Github } from "lucide-react";

export default function RightAside({ toggleDarkMode, darkMode }) {
    return (
        <aside className="sticky top-0 hidden h-screen w-20 flex-col items-center justify-center gap-10 border-l-2 border-divider-secondary text-neutral-light-primary dark:border-divider-primary dark:bg-background dark:text-neutral-dark-primary md:flex">
            <a
                href="https://www.linkedin.com/in/patricklisiecki"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-accent"
            >
                <Linkedin />
            </a>
            <a
                href="https://github.com/PatrickLisiecki"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-accent"
            >
                <Github />
            </a>
            <a
                href="/patrick_lisiecki_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-accent"
            >
                <ScrollText />
            </a>
            <button
                onClick={toggleDarkMode}
                className="text-primary border-none hover:text-blue-600 dark:text-white dark:hover:text-yellow-500"
            >
                {darkMode ? <Sun /> : <Moon />}
            </button>
        </aside>
    );
}

RightAside.propTypes = {
    toggleDarkMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
};
