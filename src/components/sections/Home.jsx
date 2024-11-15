/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-scroll";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <section className="section h-screen text-dark dark:bg-dark dark:text-white" id="home">
            <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
                <div className="flex min-w-[300px] flex-col justify-center text-center md:min-w-[500px] xl:pt-0 xl:text-left">
                    <div className="mb-2 leading-[0.8]">
                        <h1 className="h1 mb-0 block font-semibold leading-none">Patrick Lisiecki</h1>
                        <h2 className="h2 mb-0 text-[25px] font-semibold text-secondary md:text-[40px]">
                            Software Engineer
                        </h2>
                    </div>

                    <p className="mx-auto mb-4 max-w-[350px] text-secondary dark:text-secondary xl:mx-0 xl:max-w-[475px]">
                        Hello! I'm Patrick Lisiecki, a passionate software engineer and CS student based in New York. 🗽
                    </p>

                    <div className="mb-4 flex items-center justify-center gap-x-4 xl:justify-start">
                        <Link to="contact" smooth={true} duration={500} spy={true} offset={0}>
                            <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden rounded-xl border-2 border-accent bg-accent px-4 py-3 transition-all duration-300 md:max-w-[160px]">
                                <span className="text-white transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                                    Contact
                                </span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-right-long"
                                    className="absolute -translate-y-[120%] text-[22px] text-white opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                                />
                            </button>
                        </Link>

                        <a
                            // href="https://drive.google.com/file/d/1Uelyrd3QCWSo8FobVakih8S2_k1V-V3Q/view?usp=sharing"
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden rounded-xl border-2 border-dark bg-none px-4 py-3 transition-all duration-300 dark:border-white md:max-w-[160px]">
                                <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0 dark:text-white">
                                    Resume
                                </span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-right-long"
                                    className="absolute -translate-y-[120%] text-[22px] opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 dark:text-white"
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
                    </div>
                </div>

                <div className="max-h-[350px] max-w-[350px] overflow-hidden rounded-xl xl:max-h-[400px] xl:max-w-[400px]">
                    <img src="/profile.png" className="max-h-full w-full object-cover" />
                </div>
            </div>
        </section>
    );
}
