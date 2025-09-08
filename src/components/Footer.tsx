import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="flex w-full items-center border-t-2 border-divider-secondary bg-white p-6 text-neutral-light-primary dark:border-divider-primary dark:bg-background dark:text-neutral-dark-primary lg:p-8"
      id="footer"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-y-6 lg:flex-row">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Patrick Lisiecki. No rights reserved.
          </p>

          <nav className="flex items-center gap-x-5 text-3xl">
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
          </nav>
        </div>
      </div>
    </footer>
  );
}
