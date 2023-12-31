// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDev } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer
      className="dark:bg-darker flex items-center bg-primary text-white lg:p-8"
      id="footer"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 lg:flex-row">
          {/* Copyright */}
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Patrick Lisiecki. All rights
            reserved.
          </p>

          {/* Social links */}
          <nav className="flex items-center gap-x-5 text-3xl">
            <a
              href="https://www.linkedin.com/in/patricklisiecki"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:text-accent"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/PatrickLisiecki"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:text-accent"
            >
              <FontAwesomeIcon icon="fa-brands fa-square-github" />
            </a>
            <a
              href="https://dev.to/patricklisiecki"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 hover:text-accent"
            >
              <FontAwesomeIcon icon={faDev} />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
