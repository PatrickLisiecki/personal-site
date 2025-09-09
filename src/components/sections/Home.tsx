import { Github, Linkedin, MoveRight } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <section
      className="section min-h-dvh text-neutral-light-primary dark:bg-background dark:text-neutral-dark-primary"
      id="home"
    >
      <div className="container mx-auto flex flex-col-reverse items-center justify-center gap-y-16 lg:flex-row lg:gap-x-16">
        <div className="flex min-w-[300px] flex-col justify-center md:min-w-[500px] xl:text-left">
          <h1 className="h1 mb-0 block font-semibold leading-none">Patrick Lisiecki</h1>
          <h2 className="h2 mb-2 text-[25px] font-semibold text-accent md:text-[40px]">
            Software Engineer
          </h2>

          <p className="mb-4 max-w-[350px] text-[14px] leading-relaxed text-neutral-light-secondary dark:text-neutral-dark-secondary sm:max-w-[440px] sm:text-[18px] xl:max-w-[475px]">
            Hello! I'm Patrick Lisiecki, a full-stack software engineer and CS graduate based in New
            York. 🗽
          </p>

          <div className="mb-4 flex items-center justify-start gap-x-4">
            <Link to="contact" smooth={true} duration={500} spy={true} offset={0}>
              <button className="group flex w-[100px] items-center justify-center overflow-hidden rounded-xl border-2 border-accent bg-accent py-1 transition-all duration-300 sm:w-[120px] sm:py-2">
                <span className="text-[16px] text-white transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0 sm:text-[18px]">
                  Contact
                </span>
                <MoveRight
                  strokeWidth={3}
                  className="absolute -translate-y-[120%] text-[22px] text-white opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                />
              </button>
            </Link>

            <a href="/patrick_lisiecki_resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="group flex w-[100px] items-center justify-center overflow-hidden rounded-xl border-2 bg-none py-1 transition-all duration-300 sm:w-[120px] sm:py-2">
                <span className="text-[16px] transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0 sm:text-[18px]">
                  Resume
                </span>
                <MoveRight
                  strokeWidth={3}
                  className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                />
              </button>
            </a>
          </div>

          <div className="ml-2 flex items-center justify-start gap-x-6">
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
          </div>
        </div>

        <div className="h-[250px] w-[250px] overflow-hidden rounded-xl sm:h-[320px] sm:w-[320px]">
          <img
            src="/profile.webp"
            className="animate-liquid h-full w-full border-4 border-divider-secondary object-cover dark:border-divider-primary"
            alt="Profile Picture"
          />
        </div>
      </div>
    </section>
  );
}
