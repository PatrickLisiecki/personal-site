/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import animation from "../assets/animation.json";

export default function Home() {
    return (
        <div className="w-full h-full">
            <div className="container mx-auto py-40 flex flex-col justify-between items-center lg:flex-row">
                <div className="h-full container mx-auto flex flex-col justify-center text-center xl:pt-0 xl:text-left">
                    <span className="h1">Full-Stack Web Developer</span>
                    <p className="max-w-sm mx-auto mb-10 text-primary xl:max-w-xl xl:mx-0 xl:mb-16">
                        Hello! I'm Patrick Lisiecki, a full-stack developer and CS student at CUNY
                        with a passion for technology and a desire to create impactful applications.
                    </p>
                    <div className="w-full flex justify-center xl:justify-start">
                        <button className="btn p-3 border border-black text-black">
                            Work with me
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
