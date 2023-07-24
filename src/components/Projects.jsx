// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Projects data
const projectsData = [
    {
        genre: "Frontend",
        title: "Book Review Forum",
        link: "https://github.com/PatrickLisiecki/portfolio",
        image: "src/assets/project.png",
    },
    {
        genre: "Frontend",
        title: "Book Review Forum",
        link: "https://github.com/PatrickLisiecki/portfolio",
        image: "src/assets/project.png",
    },
    {
        genre: "Frontend",
        title: "Book Review Forum",
        link: "https://github.com/PatrickLisiecki/portfolio",
        image: "src/assets/project.png",
    },
    {
        genre: "Frontend",
        title: "Book Review Forum",
        link: "https://github.com/PatrickLisiecki/portfolio",
        image: "src/assets/project.png",
    },
];

export default function Projects() {
    return (
        <div className="section" id="projects">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center xl:flex-row gap-x-8">
                    <div className="flex flex-col items-center xl:items-start text-center mb-4 xl:w-[35vw] xl:mb-0 lg:text-left">
                        <span className="h2 xl:mt-4 text-accent">My Latest Work.</span>
                        <p className="max-w-[400px] mx-auto mb-4 lg:mx-0">
                            A collection of recent projects I have worked on. Click on a project to
                            view more details.
                        </p>
                        <a
                            href="https://github.com/PatrickLisiecki"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button
                                className="bg-none border border-primary px-8 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden group
                            hover:border-accent"
                            >
                                <span className="text-primary group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                    View all projects
                                </span>
                                <FontAwesomeIcon
                                    icon="fa-solid fa-right-long"
                                    className="text-primary -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                                />
                            </button>
                        </a>
                    </div>
                    <div className="w-full max-w-[75%]">
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                            {projectsData.map((item, index) => {
                                return (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="block"
                                        key={index}
                                    >
                                        <div className="bg-gray-200 p-4 flex items-center justify-center">
                                            <div className="flex items-center justify-center relative overflow-hidden group">
                                                <img
                                                    src={item.image}
                                                    alt="Project Image"
                                                    className="group-hover:scale-125 transition-all duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-sky-400 to-blue-500 opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                                                <div className="absolute bottom-0 translate-y-full text-[13px] tracking-[0.2em] group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                                    <div className="flex items-center gap-x-2">
                                                        <div className="text-white delay-100">
                                                            VIEW
                                                        </div>
                                                        <div className="translate-y-[500%] text-white group-hover:translate-y-0 transition-all duration-300 delay-150">
                                                            CODE
                                                        </div>
                                                        <div className="text-xl text-white translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                                            <FontAwesomeIcon icon="fa-solid fa-right-long" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
