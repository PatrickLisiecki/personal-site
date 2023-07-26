// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDev } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="text-white flex items-center p-4 lg:p-8 bg-gray-800" id="footer">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between items-center gap-y-6 lg:flex-row">
                    <p>&copy; {new Date().getFullYear()} Patrick Lisiecki. All rights reserved.</p>
                    <div className="flex items-center gap-x-5 text-3xl">
                        <a
                            href="https://www.linkedin.com/in/patricklisiecki"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-accent transition-all duration-300"
                        >
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </a>
                        <a
                            href="https://github.com/PatrickLisiecki"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-accent transition-all duration-300"
                        >
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        </a>
                        <a
                            href="https://dev.to/patricklisiecki"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-accent transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faDev} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
