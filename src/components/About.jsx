/* eslint-disable react/jsx-key */
import { useState } from "react";

// Icons
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { TbBrandVscode, TbJson } from "react-icons/tb";

import {
    FaHtml5,
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava,
    FaPython,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaAws,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiPostgresql,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiCplusplus,
    SiSequelize,
    SiJest,
    SiEclipseide,
} from "react-icons/si";

// Data
const aboutData = [
    {
        title: "skills",
        info: [
            {
                title: "Programming Languages",
                icons: [
                    <FaJs />,
                    <SiCplusplus />,
                    <FaJava />,
                    <FaPython />,
                    <FaHtml5 />,
                    <FaCss3Alt />,
                ],
            },
            {
                title: "Frameworks / Libraries",
                icons: [
                    <FaReact />,
                    <FaNodeJs />,
                    <SiExpress />,
                    <SiNextdotjs />,
                    <SiTailwindcss />,
                    <SiJest />,
                ],
            },
            {
                title: "Databases",
                icons: [<SiPostgresql />, <SiMongodb />, <SiMysql />, <SiSequelize />],
            },
            {
                title: "Others",
                icons: [
                    <FaGitAlt />,
                    <FaGithub />,
                    <TbBrandVscode />,
                    <SiEclipseide />,
                    <FaAws />,
                    <TbJson />,
                ],
            },
        ],
    },
    {
        title: "credentials",
        info: [
            {
                title: "Bachelor of Science Computer Science",
                subtitle: "City University of New York, College of Staten Island",
                stage: "Expected 2024",
            },
            {
                title: "Full Stack Software Engineer Student",
                subtitle: "Tech Talent Pipeline",
                stage: "June 2023 - Present",
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="w-full h-full bg-white pt-32 text-center xl:text-left">
            <div className="h-full container mx-auto flex flex-col justify-center items-center gap-x-6 xl:flex-row">
                <div className="flex-1 flex flex-col">
                    <span className="text-4xl">
                        Solving <span className="">complex problems </span>
                        and <span className="">creating elegant solutions </span>
                        is why I decided to pursue a CS degree.
                    </span>
                    <p className="max-w-[500px] mx-auto my-4 mb-6 px-2 text-lg xl:mx-0 xl:mb-12 xl:px-0">
                        From crafting visually engaging user interfaces to working on backend
                        systems, the full-service delivery process of apps is what I love about
                        full-stack engineering.
                    </p>
                </div>

                <div className="w-full h-[480px] flex flex-col xl:max-w-[54%]">
                    <div className="mx-auto flex gap-x-4 mb-4 xl:gap-x-8 xl:mx-0">
                        {aboutData.map((currentItem, i) => {
                            return (
                                <div
                                    key={i}
                                    className={`${
                                        index === i &&
                                        "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                                    } cursor-pointer capitalize relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 xl:text-lg`}
                                    onClick={() => setIndex(i)}
                                >
                                    {currentItem.title}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6">
                        {aboutData[index].info.map((currentItem, i) => {
                            return (
                                <div
                                    key={i}
                                    className="max-w-max flex-1 flex flex-col justify-evenly items-center gap-x-2 md:flex-row"
                                >
                                    <div className="flex flex-col">
                                        <div className="text-xl font-semibold md:my-0">
                                            {currentItem.title}
                                        </div>
                                        {currentItem.subtitle && (
                                            <div className="text-lg font-medium md:my-0">
                                                {currentItem.subtitle}
                                            </div>
                                        )}
                                        <div className="">{currentItem.stage}</div>
                                    </div>

                                    {currentItem.icons && (
                                        <>
                                            <div className="hidden text-xl md:flex">
                                                <MdOutlineKeyboardDoubleArrowRight />
                                            </div>
                                            <div className="flex gap-x-4">
                                                {currentItem.icons?.map((icon, i) => {
                                                    return (
                                                        <div
                                                            key={i}
                                                            className="text-4xl hover:-translate-y-[2px]"
                                                        >
                                                            {icon}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
