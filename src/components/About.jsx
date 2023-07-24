/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
    return (
        <div className="section" id="about">
            <div className="container mx-auto">
                <div className="flex flex-col justify-between gap-y-10">
                    <div className="w-full flex flex-col justify-evenly items-center gap-x-4 gap-y-4 lg:flex-row">
                        {/* Image */}
                        <div className="max-w-[375px] max-h-[350px] overflow-hidden xl:max-w-[450px] xl:max-h-[425px]">
                            <img
                                className="h-auto max-w-full"
                                src="src/assets/cup.png"
                                alt="About Picture"
                            />
                        </div>

                        {/* Text */}
                        <div className="max-w-[400px] xl:max-w-[700px] flex flex-col lg:justify-start lg:items-start md:justify-center md:items-center">
                            {/* Title */}
                            <span className="h3 uppercase text-center mb-0">About Me</span>
                            <span className="h3 text-[20px] uppercase text-accent text-center lg:text-left mb-0">
                                CS Student and Full-Stack Developer in New York
                            </span>

                            {/* Description */}
                            <p className="font-[16px] text-secondary">
                                Currently, I'm a junior computer science student at the City
                                University of New York-College of Staten Island and a current
                                resident of the NYC Tech Talent Pipeline Bootcamp. When I'm not
                                diving into lines of code, you can find me at the gym, where I push
                                myself to reach new heights both physically and mentally. In my
                                downtime, I enjoy watching captivating thriller movies that keep me
                                on the edge of my seat. Moreover, I find enjoyment in assembling and
                                fixing computers, treating each system like a puzzle to be mastered.
                                Through this platform, I aim to share my experiences, projects, and
                                insights, as well as connect with like-minded individuals who share
                                my passion for all things tech and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
