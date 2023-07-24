/* eslint-disable react/no-unescaped-entities */

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFire } from "@fortawesome/free-solid-svg-icons";

// Skills & Tools
const frontEndSkills = [
    {
        title: "HTML",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "CSS",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "JavaScript",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "TypeScript",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "React",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "Tailwind",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
];

const backEndSkills = [
    {
        title: "Node.js",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "Express.js",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "PostgreSQL",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "Sequelize",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "MongoDB",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "Mongoose",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
];

const tools = [
    {
        title: "Git",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "GitHub",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "VS Code",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "Windows",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
    {
        title: "Postman",
        icon: <FontAwesomeIcon icon={faFire} className="mx-2" />,
    },
];

export default function Skills() {
    return (
        <div className="section bg-gray-100" id="skills">
            <div className="container mx-auto">
                <div className="w-full flex flex-col justify-center items-center gap-y-4">
                    <div className="w-full flex justify-center items-center">
                        <img
                            src="src/assets/tools.png"
                            alt="Tools"
                            className="max-w-[75px] max-h-[75px]"
                        />
                    </div>
                    <span className="h2 text-[22px] mb-4 lg:text-[35px]">
                        Technologies & Tools I Use
                    </span>
                    <div className="w-full flex flex-col justify-evenly items-center gap-x-4 gap-y-4 lg:flex-row">
                        <div className="min-w-[350px] min-h-[450px] rounded-[10px] p-10 bg-gray-300 transition-all duration-300 hover:scale-105 xl:min-w-[350px] lg:min-w-[300px]">
                            <div className="h-full flex flex-col justify-center items-center">
                                <div className="w-full flex justify-center items-center">
                                    <img
                                        src="src/assets/bucket.png"
                                        alt="Paint Bucket"
                                        className="max-w-[100px] max-h-[100px]"
                                    />
                                </div>
                                <span className="h3 mb-4">Front-End Skills</span>
                                <ul className="w-full ml-[50%] flex flex-col items-start">
                                    {frontEndSkills.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <span className="text-xl">
                                                    {skill.icon}
                                                    {skill.title}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="min-w-[350px] min-h-[450px] rounded-[10px] p-10 bg-gray-300 transition-all duration-300 hover:scale-105 xl:min-w-[350px] lg:min-w-[300px]">
                            <div className="h-full flex flex-col justify-center items-center">
                                <div className="w-full flex justify-center items-center">
                                    <img
                                        src="src/assets/safe.png"
                                        alt="Safe"
                                        className="max-w-[100px] max-h-[100px]"
                                    />
                                </div>
                                <span className="h3 mb-4">Back-End Skills</span>
                                <ul className="w-full ml-[50%] flex flex-col items-start">
                                    {backEndSkills.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <span className="text-xl">
                                                    {skill.icon}
                                                    {skill.title}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="min-w-[350px] min-h-[450px] rounded-[10px] p-10 bg-gray-300 transition-all duration-300 hover:scale-105 xl:min-w-[350px] lg:min-w-[300px]">
                            <div className="h-full flex flex-col justify-center items-center">
                                <div className="w-full flex justify-center items-center">
                                    <img
                                        src="src/assets/setting.png"
                                        alt="Setting Wheel"
                                        className="max-w-[100px] max-h-[100px]"
                                    />
                                </div>
                                <span className="h3 mb-4">Tools</span>
                                <ul className="w-full ml-[50%] flex flex-col items-start">
                                    {tools.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <span className="text-xl">
                                                    {skill.icon}
                                                    {skill.title}
                                                </span>
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
