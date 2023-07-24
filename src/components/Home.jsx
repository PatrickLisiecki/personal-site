/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import animation from "../assets/animation.json";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <div className="section bg-gray-100" id="home">
            <div className="container mx-auto py-32 flex flex-col justify-evenly items-center lg:flex-row">
                <div className="max-w-[800px] flex flex-col justify-center text-center xl:pt-0 xl:text-left">
                    {/* Title */}
                    <span className="h1 mb-4">
                        Full-Stack Web Developer{" "}
                        <img
                            src="src/assets/fire.png"
                            alt="Flame"
                            width={70}
                            height={70}
                            className="inline-block"
                        />
                    </span>

                    {/* Text */}
                    <p className="max-w-[350px] mx-auto mb-4 text-primary xl:max-w-[475px] xl:mx-0">
                        Hello! I'm Patrick Lisiecki, a passionate full-stack web developer and CS
                        student based in New York. 🗽
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center items-center gap-x-4 mb-4 xl:justify-start">
                        <a href="#footer">
                            <button className="bg-accent border border-accent min-w-[120px] max-w-[180px] px-4 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden group">
                                <span className="text-white group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                    Say Hello
                                </span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-right-long"
                                    className="text-white -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                                />
                            </button>
                        </a>
                        <a href="#projects">
                            <button className="bg-none border border-primary min-w-[140px] max-w-[180px] px-4 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden group">
                                <span className="text-primary group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                    View Work
                                </span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-right-long"
                                    className="text-primary -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                                />
                            </button>
                        </a>
                    </div>
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
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </a>
                    </div>
                </div>

                {/* Animation / Image */}
                <div className="max-w-[45%]">
                    <Lottie animationData={animation} />
                </div>
            </div>
        </div>
    );
}
