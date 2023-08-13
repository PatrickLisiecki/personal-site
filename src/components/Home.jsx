/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import Lottie from "lottie-react";
import animation from "../assets/animation.json";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <section className="section min-h-screen bg-gray-100" id="home">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
        <div className="flex min-w-[300px] flex-col justify-center text-center md:min-w-[500px] xl:pt-0 xl:text-left">
          {/* Title */}
          <div className="mb-2 leading-[0.8]">
            <h1 className="h1 mb-0 block leading-none">Patrick Lisiecki</h1>
            <h2 className="h2 mb-0 text-[25px] md:text-[40px]">
              Web Developer
              <img
                src="/flash.png"
                alt="Flash"
                className="mx-1 inline-block max-h-[25px] max-w-[25px] md:mx-2 md:max-h-[50px] md:max-w-[50px]"
              />
            </h2>
          </div>

          {/* Text */}
          <p className="mx-auto mb-4 max-w-[350px] text-primary xl:mx-0 xl:max-w-[475px]">
            Hello! I'm Patrick Lisiecki, a passionate web developer and CS
            student based in New York. 🗽
          </p>

          {/* Buttons */}
          <div className="mb-4 flex items-center justify-center gap-x-4 xl:justify-start">
            {/* Contact Button */}
            <a href="#contact">
              <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden border border-accent bg-accent px-4 py-3 transition-all duration-300 md:max-w-[160px]">
                <span className="text-white transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                  Contact
                </span>
                <FontAwesomeIcon
                  icon="fa-solid fa-right-long"
                  className="absolute -translate-y-[120%] text-[22px] text-white opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
                />
              </button>
            </a>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/18HfoIYtUPc9nhOxsYO9AgdVYH5BKXtEC/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="group flex min-w-[120px] max-w-[140px] items-center justify-center overflow-hidden border border-primary bg-none px-4 py-3 transition-all duration-300 md:max-w-[160px]">
                <span className="text-primary transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
                  Resume
                </span>
                <FontAwesomeIcon
                  icon="fa-solid fa-right-long"
                  className="absolute -translate-y-[120%] text-[22px] text-primary opacity-0 transition-all duration-300 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100"
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
