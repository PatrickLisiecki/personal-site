/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import Lottie from "lottie-react";
import animation from "../assets/animation.json";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <div className="section min-h-screen bg-gray-100" id="home">
            <div className="container mx-auto flex flex-col justify-center items-center lg:flex-row">
                <div className="min-w-[300px] md:min-w-[500px] flex flex-col justify-center text-center xl:pt-0 xl:text-left">
                    {/* Title */}
                    <div className="leading-[0.8] mb-2">
                        <span className="h1 mb-0 block leading-none">Patrick Lisiecki</span>
                        <span className="h2 text-[25px] md:text-[40px]">
                            Web Developer
                            <img
                                src="src/assets/flash.png"
                                alt="Flash"
                                className="inline-block mx-1 md:mx-2 max-w-[25px] max-h-[25px] md:max-w-[50px] md:max-h-[50px]"
                            />
                        </span>
                    </div>

                    {/* Text */}
                    <p className="max-w-[350px] mx-auto mb-4 text-primary xl:max-w-[475px] xl:mx-0">
                        Hello! I'm Patrick Lisiecki, a passionate web developer and CS student based
                        in New York. 🗽
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center items-center gap-x-4 mb-4 xl:justify-start">
                        {/* Contact Button */}
                        <a href="#contact">
                            <button className="bg-accent border border-accent min-w-[120px] max-w-[140px] md:max-w-[160px] px-4 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden group">
                                <span className="text-white group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                    Contact
                                </span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-right-long"
                                    className="text-white -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                                />
                            </button>
                        </a>

                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/file/d/1a0hWESwTMwDCh3WbXm8dnkfI1PZF57WG/view?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="bg-none border border-primary min-w-[120px] max-w-[140px] md:max-w-[160px] px-4 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden group">
                                <span className="text-primary group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                    Resume
                                </span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-right-long"
                                    className="text-primary -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                                />
                            </button>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center items-center gap-x-4 text-4xl xl:justify-start">
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
                    </div>
                </div>

                {/* Animation / Image */}
                <div className="max-w-[400px] max-h-[375px] xl:max-w-[500px] xl:max-h-[475px] overflow-hidden">
                    <Lottie animationData={animation} />
                </div>
            </div>
        </div>
    );
}
