/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

// Animation
import Lottie from "lottie-react";
import animation from "../assets/animation.json";

import { Link } from "react-scroll";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <section className="section min-h-screen bg-gray-100 dark:bg-dark dark:text-white" id="home">
            <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
                <div className="flex min-w-[300px] flex-col justify-center text-center md:min-w-[500px] xl:pt-0 xl:text-left">
                    {/* Title */}
                    <div className="mb-2 leading-[0.8]">
                        <h1 className="h1 mb-0 block font-semibold leading-none">Patrick Lisiecki</h1>
                        <h2 className="h2 mb-0 text-[25px] font-semibold md:text-[40px]">
                            Software Developer
                            <img
                                src="/flash.png"
                                alt="Flash"
                                className="mx-1 inline-block max-h-[25px] max-w-[25px] md:mx-2 md:max-h-[45px] md:max-w-[45px]"
                            />
                        </h2>
                    </div>

                    {/* Text */}
                    <p className="mx-auto mb-4 max-w-[350px] dark:text-white xl:mx-0 xl:max-w-[475px]">
                        Hello! I'm Patrick Lisiecki, a passionate software developer and CS student based in New York.
                        🗽
                    </p>

                    {/* Buttons */}
                    <div className="mb-4 flex items-center justify-center gap-x-4 xl:justify-start">
                        {/* Contact Button */}
                        <Link to="contact" smooth={true} duration={500} spy={true} offset={0}>
                            <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden border border-accent bg-accent px-4 py-3 transition-all duration-300 md:max-w-[160px]">
                                <span className="text-white transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                                    Contact
                                </span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-right-long"
                                    className="absolute -translate-y-[120%] text-[22px] text-white opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                                />
                            </button>
                        </Link>

                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/file/d/1Uelyrd3QCWSo8FobVakih8S2_k1V-V3Q/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden border border-primary bg-none px-4 py-3 transition-all duration-300 dark:border-white md:max-w-[160px]">
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

                    {/* Social Links */}
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

                {/* Animation / Image */}
                <div className="max-h-[375px] max-w-[400px] overflow-hidden xl:max-h-[475px] xl:max-w-[500px]">
                    <Lottie animationData={animation} />
                </div>
            </div>
        </section>
    );
}
