/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFire } from "@fortawesome/free-solid-svg-icons";

// Skills & Tools
const frontEndSkills = [
    {
        title: "JavaScript",
        icon: <i className="devicon-javascript-plain colored text-3xl"></i>,
    },
    {
        title: "React.JS",
        icon: <i className="devicon-react-original colored text-3xl"></i>,
    },
    {
        title: "TailwindCSS",
        icon: <i className="devicon-tailwindcss-plain colored text-3xl"></i>,
    },
];

const backEndSkills = [
    {
        title: "Node.JS",
        icon: <i className="devicon-nodejs-plain colored text-3xl"></i>,
    },
    {
        title: "Express.JS",
        icon: <i className="devicon-express-original colored text-3xl"></i>,
    },
    {
        title: "MongoDB",
        icon: <i className="devicon-mongodb-plain colored text-3xl"></i>,
    },
    // {
    //     title: "Mongoose",
    //     icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    // },
];

const tools = [
    {
        title: "Git",
        icon: <i className="devicon-git-plain colored text-3xl"></i>,
    },
    {
        title: "GitHub",
        icon: <i className="devicon-github-original colored text-3xl"></i>,
    },
    {
        title: "VS Code",
        icon: <i className="devicon-vscode-plain colored text-3xl"></i>,
    },
    // {
    //     title: "Windows",
    //     icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    // },
    // {
    //     title: "Postman",
    //     icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    // },
];

export default function Skills() {
    return (
        <div className="section bg-gray-100" id="skills">
            <div className="container mx-auto">
                <div className="w-full flex flex-col justify-center items-center gap-y-4">
                    {/* Header */}
                    <div className="w-full flex justify-center items-center">
                        <img
                            src="src/assets/tools.png"
                            alt="Tools"
                            className="max-w-[75px] max-h-[75px] md:max-w-[100px] md:max-h-[100px]"
                        />
                    </div>
                    <span className="h2 capitalize mb-4">Technologies & Tools I Use</span>

                    {/* Front End Skills */}
                    <div className="w-full flex flex-col justify-evenly items-center gap-x-4 gap-y-4 lg:flex-row">
                        <div className="min-w-[350px] min-h-[400px] rounded-[10px] p-10 bg-gray-300 transition-all duration-300 hover:-translate-y-2 xl:min-w-[350px] lg:min-w-[300px] md:min-h-[450px]">
                            <div className="h-full flex flex-col justify-center items-center">
                                <div className="w-full flex justify-center items-center">
                                    <img
                                        src="src/assets/bucket.png"
                                        alt="Paint Bucket"
                                        className="max-w-[75px] max-h-[75px] md:max-w-[100px] md:max-h-[100px]"
                                    />
                                </div>
                                <span className="h3 mb-4">Front-End</span>
                                <ul className="w-full flex flex-col justify-center items-start gap-y-2">
                                    {frontEndSkills.map((skill, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="ml-[20%] flex flex-row justify-start items-center gap-x-2"
                                            >
                                                <div className="w-[50px] h-[50px] p-4 flex justify-center items-center bg-white rounded-full shadow-bs">
                                                    {skill.icon}
                                                </div>
                                                <span className="text-xl">{skill.title}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* Back End Skills */}
                        <div className="min-w-[350px] min-h-[400px] rounded-[10px] p-10 bg-gray-300 transition-all duration-300 hover:-translate-y-2 xl:min-w-[350px] lg:min-w-[300px] md:min-h-[450px]">
                            <div className="h-full flex flex-col justify-center items-center">
                                <div className="w-full flex justify-center items-center">
                                    <img
                                        src="src/assets/safe.png"
                                        alt="Safe"
                                        className="max-w-[75px] max-h-[75px] md:max-w-[100px] md:max-h-[100px]"
                                    />
                                </div>
                                <span className="h3 mb-4">Back-End</span>
                                <ul className="w-full flex flex-col justify-center items-start gap-y-2">
                                    {backEndSkills.map((skill, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="ml-[20%] flex flex-row justify-start items-center gap-x-2"
                                            >
                                                <div className="w-[50px] h-[50px] p-4 flex justify-center items-center bg-white rounded-full shadow-bs">
                                                    {skill.icon}
                                                </div>
                                                <span className="text-xl">{skill.title}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="min-w-[350px] min-h-[400px] rounded-[10px] p-10 bg-gray-300 transition-all duration-300 hover:-translate-y-2 xl:min-w-[350px] lg:min-w-[300px] md:min-h-[450px]">
                            <div className="h-full flex flex-col justify-center items-center">
                                <div className="w-full flex justify-center items-center">
                                    <img
                                        src="src/assets/setting.png"
                                        alt="Settings Wheel"
                                        className="max-w-[75px] max-h-[75px] md:max-w-[100px] md:max-h-[100px]"
                                    />
                                </div>
                                <span className="h3 mb-4">Tools</span>
                                <ul className="w-full flex flex-col justify-center items-start gap-y-2">
                                    {tools.map((skill, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="ml-[20%] flex flex-row justify-start items-center gap-x-2"
                                            >
                                                <div className="w-[50px] h-[50px] p-4 flex justify-center items-center bg-white rounded-full shadow-bs">
                                                    {skill.icon}
                                                </div>
                                                <span className="text-xl">{skill.title}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
