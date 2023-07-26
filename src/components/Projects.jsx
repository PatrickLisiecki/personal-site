/* eslint-disable react/jsx-key */

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Projects data
const projectsData = [
    {
        title: "Book Review Forum",
        description:
            "A functional dynamic forum that gives users the option to create, edit, and delete forums, as well as a thread creation feature.",
        link: "https://github.com/PatrickLisiecki/book-review-forum",
        image: "../assets/project-1.png",
        demo: "#",
        tech: [
            <i className="devicon-html5-plain colored"></i>,
            <i className="devicon-react-original colored"></i>,
            <i className="devicon-tailwindcss-plain colored"></i>,
        ],
    },
    {
        title: "Flashcard Creator",
        description:
            "A user-friendly and interactive application for effective learning with digital flashcards.",
        link: "https://github.com/PatrickLisiecki/flashcard-creator",
        demo: "#",
        image: "../assets/project-2.png",
        tech: [
            <i className="devicon-mongodb-plain colored"></i>,
            <i className="devicon-express-original colored"></i>,
            <i className="devicon-react-original colored"></i>,
            <i className="devicon-nodejs-plain colored"></i>,
        ],
    },
    {
        title: "Portfolio Website",
        description: "An interactive portfolio website for a developer.",
        link: "https://github.com/PatrickLisiecki/portfolio",
        demo: "https://portfolio-patricklisiecki.vercel.app/",
        image: "../assets/project-3.png",
        tech: [
            <i className="devicon-nextjs-original colored"></i>,
            <i className="devicon-react-original colored"></i>,
            <i className="devicon-tailwindcss-plain colored"></i>,
        ],
    },
];

export default function Projects() {
    return (
        <div className="py-[115px] lg:min-h-screen flex items-center" id="projects">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center justify-center">
                    <div className="flex flex-col justify-center items-center text-center mb-4 xl:w-[35vw]">
                        <div className="w-full flex justify-center items-center">
                            <img
                                src="../assets/computer.png"
                                alt="Computer"
                                className="max-w-[75px] max-h-[75px] md:max-w-[100px] md:max-h-[100px]"
                            />
                        </div>
                        <span className="h2 capitalize mb-4">My Latest Work</span>
                    </div>

                    {/* Projects */}
                    <div className="w-full h-auto grid grid-cols-1 gap-10">
                        {projectsData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-full min-h-[300px] md:min-h-[350px] p-5 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-x-8 shadow-bs rounded-[2rem]"
                                >
                                    {/* Project Image */}
                                    <div className="min-w-[100%] h-full flex justify-center items-center rounded-lg overflow-hidden shadow-bs mb-2 xl:mb-0 lg:min-w-[60%]">
                                        <img
                                            src={item.image}
                                            alt="Project Image"
                                            className="h-full max-w-full object-fit rounded-lg hover:scale-125 transition-all duration-500"
                                        />
                                    </div>

                                    {/* Project Info */}
                                    <div className="w-full h-full mx-auto flex flex-col justify-center items-center">
                                        {/* Project Title */}
                                        <span className="h3 mb-2">{item.title}</span>

                                        {/* Project Description */}
                                        <p className="text-secondary text-center max-w-[400px] leading-tight mb-4">
                                            {item.description}
                                        </p>

                                        {/* Project Tech */}
                                        <div className="w-[50%] flex justify-evenly items-center gap-x-4 mb-8">
                                            {item.tech.map((item, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="w-[50px] h-[50px] p-4 flex justify-center items-center rounded-full shadow-bs text-3xl"
                                                    >
                                                        {item}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Project Links */}
                                        <div className="w-full flex justify-center items-center gap-x-8">
                                            <a href={item.link} target="_blank" rel="noreferrer">
                                                <button className="bg-accent border border-accent min-w-[120px] max-w-[140px] md:max-w-[160px] px-4 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden group">
                                                    <span className="text-white group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                                        Code
                                                    </span>
                                                    <FontAwesomeIcon
                                                        icon="fa-solid fa-right-long"
                                                        className="text-white -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                                                    />
                                                </button>
                                            </a>
                                            <a href={item.demo} target="_blank" rel="noreferrer">
                                                <button className="bg-none border border-primary min-w-[120px] max-w-[140px] md:max-w-[160px] px-4 py-3 transition-all duration-300 flex items-center justify-center overflow-hidden group">
                                                    <span className="text-primary group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                                        Demo
                                                    </span>
                                                    <FontAwesomeIcon
                                                        icon="fa-solid fa-right-long"
                                                        className="text-primary -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                                                    />
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
