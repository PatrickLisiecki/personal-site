/* eslint-disable react/no-unescaped-entities */
import { Users, Mail, Map, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section
            className="section text-neutral-light-primary dark:bg-background dark:text-neutral-dark-primary"
            id="contact"
        >
            <div className="container mx-auto">
                <div className="mb-2 flex items-center gap-x-4">
                    <MessageSquare strokeWidth={3} size={26} />
                    <h3 className="text-[26px] font-semibold uppercase leading-[46px]">Let's Connect</h3>
                </div>

                <p className="mb-8 text-neutral-light-secondary dark:text-neutral-dark-secondary">
                    I'm always interested in working with others.
                </p>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-center justify-between rounded-xl border p-4 hover:bg-gray-100 dark:hover:bg-muted">
                        <div className="flex items-center gap-4">
                            <Map size={40} />
                            <div>
                                <span className="text-[16px]">Location</span>
                                <p className="text-[14px] text-neutral-light-secondary dark:text-neutral-dark-secondary">
                                    New York, NY
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border p-4 hover:bg-gray-100 dark:hover:bg-muted">
                        <div className="flex items-center gap-4">
                            <Mail size={40} />
                            <div>
                                <span className="text-[16px]">Email</span>
                                <p className="text-[14px] text-neutral-light-secondary dark:text-neutral-dark-secondary">
                                    impatricklisiecki@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/patricklisiecki/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border p-4 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-muted"
                    >
                        <div className="flex items-center gap-4">
                            <Users size={40} />
                            <div>
                                <span className="text-[16px]">LinkedIn</span>
                                <p className="text-[14px] text-neutral-light-secondary dark:text-neutral-dark-secondary">
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
