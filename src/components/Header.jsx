import { Link } from "react-router-dom";

import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

export default function Header() {
    return (
        <header className="w-full absolute z-30 flex items-center px-16 py-5 xl:py-0 xl:px-0 xl:h-[90px] shadow-bs">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center gap-y-6 lg:flex-row">
                    <Link to="/">
                        <span className="text-5xl text-primary font-[600]">patrick</span>
                        <span className="text-5xl text-primary font-[400] ml-3">lisiecki</span>
                        <span className="text-5xl text-accent">.</span>
                    </Link>
                    <div className="flex items-center gap-x-5 text-3xl">
                        <a
                            href="https://www.linkedin.com/in/patricklisiecki"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-accent transition-all duration-300"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/PatrickLisiecki"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-accent transition-all duration-300"
                        >
                            <FaSquareGithub />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
