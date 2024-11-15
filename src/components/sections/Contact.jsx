/* eslint-disable react/no-unescaped-entities */
import { Users, Mail, Map, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section
            className="section dark:bg-background dark:text-neutral-dark-primary text-neutral-light-primary"
            id="contact"
        >
            <div className="container mx-auto">
                <div className="mb-2 flex items-center gap-x-4">
                    <MessageSquare strokeWidth={3} size={26} />

                    <h3 className="text-[26px] font-semibold uppercase leading-[46px]">Let's Connect</h3>
                </div>

                <p className="dark:text-neutral-dark-secondary text-neutral-light-secondary mb-8">
                    I'm always interested in working with others.
                </p>

                <div className="flex flex-col gap-4 lg:flex-row lg:gap-24">
                    <div className="dark:hover:bg-muted flex items-center justify-between rounded-xl border p-4 hover:bg-gray-100">
                        <div className="flex w-[300px] items-center gap-4">
                            <Map size={40} />
                            <div>
                                <span className="text-[16px]">Location</span>
                                <p className="dark:text-neutral-dark-secondary text-neutral-light-secondary text-[14px]">
                                    New York, NY
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="dark:hover:bg-muted flex items-center justify-between rounded-xl border p-4 hover:bg-gray-100">
                        <div className="flex w-[300px] items-center gap-4">
                            <Mail size={40} />
                            <div>
                                <span className="text-[16px]">Email</span>
                                <p className="dark:text-neutral-dark-secondary text-neutral-light-secondary text-[14px]">
                                    impatricklisiecki@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/patricklisiecki/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dark:hover:bg-muted group flex items-center justify-between rounded-xl border p-4 transition-colors duration-200 hover:bg-gray-100"
                    >
                        <div className="flex w-[300px] items-center gap-4">
                            <Users size={40} />
                            <div>
                                <span className="text-[16px]">LinkedIn</span>
                                <p className="dark:text-neutral-dark-secondary text-neutral-light-secondary text-[14px]">
                                    linkedin.com/in/patricklisiecki
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
