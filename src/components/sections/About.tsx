/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { BookOpenTextIcon } from "lucide-react";

export default function About() {
    return (
        <section
            className="section text-neutral-light-primary dark:bg-background dark:text-neutral-dark-primary"
            id="about"
        >
            <div className="container mx-auto">
                <div className="mb-2 flex items-center gap-x-4">
                    <BookOpenTextIcon strokeWidth={3} size={26} />
                    <h3 className="text-[26px] font-semibold uppercase leading-[46px]">About Me</h3>
                </div>

                <p className="mb-8 text-accent">Software engineer and computer science graduate from NYC.</p>

                <p className="font-[16px] text-neutral-light-secondary dark:text-neutral-dark-secondary">
                    I'm a recent computer science graduate from the City University of New York-College of Staten Island
                    and a NYC Tech Talent Pipeline fellow. My main experience is in full-stack development and I love
                    contributing to both the frontend and backend of a project. When I'm not working on a project, you
                    can find me at the gym, watching movies, or playing basketball. At this moment, my favorite movie is
                    Parasite and my favorite show of all time is Breaking Bad. Moreover, I find enjoyment in assembling
                    and fixing computers, which led me to choose computer science as my major. Through this platform, I
                    aim to share my experiences, projects, and insights, as well as connect with others who share my
                    passion.
                </p>
            </div>
        </section>
    );
}
