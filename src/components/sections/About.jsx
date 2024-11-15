/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { BookOpenTextIcon } from "lucide-react";

export default function About() {
    return (
        <section
            className="section dark:bg-background dark:text-neutral-dark-primary text-neutral-light-primary"
            id="about"
        >
            <div className="container mx-auto">
                <div className="mb-2 flex items-center gap-x-4">
                    <BookOpenTextIcon strokeWidth={3} size={26} />
                    <h3 className="text-[26px] font-semibold uppercase leading-[46px]">About Me</h3>
                </div>

                <p className="dark:text-neutral-dark-secondary text-neutral-light-secondary mb-8">
                    Software engineer and computer science student from NYC.
                </p>

                <p className="text-neutral-light-secondary dark:text-neutral-dark-secondary font-[16px]">
                    Greetings! My name is Patrick and I'm a senior computer science student at the City University of
                    New York-College of Staten Island and a current resident of the NYC Tech Talent Pipeline Program.
                    When I'm not working on a project or schoolwork, you can find me at the gym, watching movies, or
                    learning about tech. In my downtime, I love watching movies and shows. At this moment, my favorite
                    movie is Parasite and my favorite show of all time is Breaking Bad. Moreover, I find enjoyment in
                    assembling and fixing computers, which led me to choose computer science as my academic pursuit.
                    Through this platform, I aim to share my experiences, projects, and insights, as well as connect
                    with others who share my passion.
                </p>
            </div>
        </section>
    );
}
