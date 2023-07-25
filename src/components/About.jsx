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
                                src="src/assets/cup.png"
                                alt="About Picture"
                                className="h-auto max-w-full"
                            />
                        </div>

                        {/* Text */}
                        <div className="max-w-[400px] xl:max-w-[700px] flex flex-col lg:justify-start lg:items-start md:justify-center md:items-center">
                            {/* Title */}
                            <span className="h3 uppercase text-center mb-0">About Me</span>
                            <span className="h3 text-[20px] uppercase text-accent text-center lg:text-left mb-0">
                                CS Student and Developer Based in New York
                            </span>

                            {/* Description */}
                            <p className="font-[16px] text-secondary">
                                Hello! My name is Patrick and I'm a computer science student at the
                                CUNY-College of Staten Island and a current resident of the NYC Tech
                                Talent Pipeline Bootcamp. When I'm not diving into lines of code,
                                you can find me at the gym, where I push myself to reach new heights
                                both physically and mentally. In my downtime, I enjoy watching
                                movies and shows. At this moment, my favorite movie is Parasite and
                                my favorite show is Breaking Bad. Moreover, I find enjoyment in
                                assembling and fixing computers, which is the reason why I began my
                                coding journey. Through this platform, I aim to share my
                                experiences, projects, and insights, as well as connect with others
                                who share my passion for all things tech and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
