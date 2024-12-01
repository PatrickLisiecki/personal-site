/* eslint-disable react/jsx-key */
import { useState } from "react";
import PropTypes from "prop-types";

import { ArrowRight, FolderGit2 } from "lucide-react";

export default function Projects({ projectsData }) {
    const [filteredProjects, setFilteredProjects] = useState(projectsData);
    const [selectedType, setSelectedType] = useState("all");

    const filterProjects = (type) => {
        setSelectedType(type);
        if (type === "all") {
            setFilteredProjects(projectsData);
        } else {
            const filtered = projectsData.filter((project) => project.type === type);
            setFilteredProjects(filtered);
        }
    };

    const filterOptions = {
        all: "All",
        web: "Web Dev",
        os: "OS",
        games: "Games",
    };

    return (
        <section
            className="section text-neutral-light-primary dark:bg-background dark:text-neutral-dark-primary"
            id="projects"
        >
            <div className="container mx-auto">
                <div className="mb-2 flex items-center gap-x-4">
                    <FolderGit2 strokeWidth={3} size={26} />
                    <h3 className="text-[26px] font-semibold uppercase leading-[46px]">My Projects</h3>
                </div>

                <p className="mb-8 text-neutral-light-secondary dark:text-neutral-dark-secondary">
                    Explore some of my recent projects.
                </p>

                <div className="mb-6 flex gap-x-12">
                    {Object.entries(filterOptions).map(([type, name], index) => (
                        <button
                            key={index}
                            onClick={() => filterProjects(type)}
                            className={`border-b-2 ${
                                selectedType === type
                                    ? "border-accent"
                                    : "border-transparent hover:border-neutral-light-primary dark:hover:border-neutral-dark-primary"
                            }`}
                        >
                            {name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.length === 0 ? (
                        <div className="col-span-full py-24 text-center text-xl font-semibold">Coming soon...</div>
                    ) : (
                        filteredProjects.map((project, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-between overflow-hidden rounded-lg border border-gray-200 dark:border-divider-primary"
                            >
                                <div className="h-1/2 w-full">
                                    <img src={project.img} alt={project.title} className="h-full w-full object-cover" />
                                </div>
                                <div className="flex flex-col p-4">
                                    <h4 className="mb-2 text-xl font-semibold">{project.title}</h4>

                                    <p className="mb-4 text-sm text-neutral-light-primary dark:text-neutral-dark-secondary">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm">GitHub</span>
                                                <ArrowRight className="h-4 w-4 transform transition-all duration-200 group-hover:-rotate-45 group-hover:scale-110" />
                                            </div>
                                        </a>

                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm">Demo</span>
                                                    <ArrowRight className="h-4 w-4 transform transition-all duration-200 group-hover:-rotate-45 group-hover:scale-110" />
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

Projects.propTypes = {
    projectsData: PropTypes.arrayOf(
        PropTypes.shape({
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            demo: PropTypes.string,
            tech: PropTypes.arrayOf(PropTypes.string).isRequired,
        }),
    ).isRequired,
};
