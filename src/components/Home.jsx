/* eslint-disable react/no-unescaped-entities */
import Header from "./Header";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";

export default function Home() {
    return (
        <main className="w-full min-h-screen" id="home">
            <Header />
            <div className="container mx-auto py-10 flex flex-col justify-between items-center lg:flex-row lg:py-40 lg:h-[800px]">
                <div className="w-[50%] flex flex-col gap-y-8">
                    <span className="text-6xl text-primary font-bold">
                        Full-Stack Web Developer
                    </span>
                    <p className="text-2xl text-primary">
                        Hello! I'm Patrick Lisiecki, a full-stack developer and CS student at CUNY
                        with a passion for technology and a desire to create impactful applications.
                    </p>
                    <div className="flex flex-row justify-start items-center gap-x-5 text-gray-700">
                        <FaLinkedin className="w-[35px] h-[35px] cursor-pointer hover:text-sky-400 transition-all duration-300" />
                        <FaSquareGithub className="w-[35px] h-[35px] cursor-pointer hover:text-sky-400 transition-all duration-300" />
                    </div>
                </div>
                <div className="max-w-[45%]">
                    <Lottie animationData={animation} />
                </div>
            </div>
        </main>
    );
}
