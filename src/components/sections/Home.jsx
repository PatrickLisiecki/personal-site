/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";

import { MoveRight, Linkedin, Github } from "lucide-react";

export default function Home() {
    return (
        <section
            className="section dark:bg-background dark:text-neutral-dark-primary text-neutral-light-primary pt-24 lg:pt-64"
            id="home"
        >
            <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:gap-x-16">
                <div className="flex min-w-[300px] flex-col justify-center text-center md:min-w-[500px] xl:text-left">
                    <div className="leading-[0.8]">
                        <h1 className="h1 mb-0 block font-semibold leading-none">Patrick Lisiecki</h1>
                        <h2 className="h2 text-neutral-light-secondary dark:text-neutral-dark-secondary mb-0 text-[25px] font-semibold md:text-[40px]">
                            Software Engineer
                        </h2>
                    </div>

                    <p className="text-neutral-light-secondary dark:text-neutral-dark-secondary mx-auto mb-4 max-w-[350px] text-[16px] lg:text-[18px] xl:mx-0 xl:max-w-[475px]">
                        Hello! I'm Patrick Lisiecki, a full-stack software engineer and CS student based in New York. 🗽
                    </p>

                    <div className="mb-4 flex items-center justify-center gap-x-4 xl:justify-start">
                        <Link to="contact" smooth={true} duration={500} spy={true} offset={0}>
                            <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden rounded-xl border-2 border-accent bg-accent px-4 py-3 transition-all duration-300 md:max-w-[160px]">
                                <span className="text-white transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                                    Contact
                                </span>
                                <MoveRight
                                    strokeWidth={3}
                                    className="absolute -translate-y-[120%] text-[22px] text-white opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                                />
                            </button>
                        </Link>

                        <a href="/resume.pdf" target="_blank" rel="noreferrer">
                            <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden rounded-xl border-2 bg-none px-4 py-3 transition-all duration-300 md:max-w-[160px]">
                                <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                                    Resume
                                </span>
                                <MoveRight
                                    strokeWidth={3}
                                    className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                                />
                            </button>
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-x-4 text-4xl xl:justify-start">
                        <a
                            href="https://www.linkedin.com/in/patricklisiecki"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-all duration-300 hover:text-accent"
                        >
                            <Linkedin />
                        </a>
                        <a
                            href="https://github.com/PatrickLisiecki"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-all duration-300 hover:text-accent"
                        >
                            <Github />
                        </a>
                    </div>
                </div>

                <div className="h-[320px] w-[320px] overflow-hidden rounded-xl">
                    <img src="/profile.png" className="max-h-full w-full object-cover" />
                </div>
            </div>
        </section>
    );
}
