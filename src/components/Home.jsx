/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import animation from "../assets/animation.json";

import { BsArrowRight } from "react-icons/bs";

export default function Home() {
    return (
        <div className="w-full h-full">
            <div className="container mx-auto py-40 flex flex-col justify-between items-center lg:flex-row">
                <div className="h-full container mx-auto flex flex-col justify-center text-center xl:pt-0 xl:text-left">
                    <span className="h1">Full-Stack Web Developer ✌</span>
                    <p className="max-w-sm mx-auto mb-10 text-primary xl:max-w-xl xl:mx-0 xl:mb-8">
                        Hello! I'm Patrick Lisiecki, a full-stack developer and CS student at CUNY
                        with a passion for technology and a desire to create impactful applications.
                    </p>
                    <div className="w-full flex justify-center xl:justify-start">
                        <button className="btn rounded-full border border-primary max-w-[178px] px-8 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                            <span className="text-primary font-poppins group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Let's talk
                            </span>
                            <BsArrowRight className="text-primary -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                        </button>
                    </div>
                </div>
                <div className="max-w-[45%]">
                    <Lottie animationData={animation} />
                </div>
            </div>
        </div>
    );
}
