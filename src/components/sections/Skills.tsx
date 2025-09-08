/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";

import { ArrowRight, Code } from "lucide-react";

export default function Skills({ skillsData }) {
    return (
        <section
            className="section dark:bg-background dark:text-neutral-dark-primary text-neutral-light-primary"
            id="skills"
        >
            <div className="container mx-auto">
                <div className="mb-2 flex items-center gap-x-4">
                    <Code strokeWidth={3} size={26} />
                    <h3 className="text-[26px] font-semibold uppercase leading-[46px]">My Skills</h3>
                </div>

                <p className="dark:text-neutral-dark-secondary text-neutral-light-secondary mb-8">
                    Committed to continuous learning and always refining my skills.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skillsData.map((skill, index) => {
                        return (
                            <a
                                key={index}
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dark:hover:bg-muted group flex items-center justify-between rounded-xl border p-4 transition-colors duration-200 hover:bg-gray-100"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={skill.img} alt={skill.title} className="h-[40px] w-[40px] rounded-xl" />
                                    <div>
                                        <span className="text-[16px]">{skill.title}</span>
                                        <p className="dark:text-neutral-dark-secondary text-neutral-light-secondary text-[14px]">
                                            {skill.type}
                                        </p>
                                    </div>
                                </div>
                                <ArrowRight className="h-5 w-5 transform transition-all duration-200 group-hover:-rotate-45 group-hover:scale-110" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

Skills.propTypes = {
    skillsData: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
