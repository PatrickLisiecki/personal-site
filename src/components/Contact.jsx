/* eslint-disable react/no-unescaped-entities */

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <div className="section" id="contact">
            <div className="container mx-auto text-center xl:text-left flex items-center justify-center">
                <div className="flex flex-col w-full max-w-[700px]">
                    {/* Heading */}
                    <span className="h2 text-center mb-12">
                        Let's <span className="text-accent">connect.</span>
                    </span>

                    {/* Form */}
                    <form method="post" className="flex-1 flex flex-col gap-6 w-full mx-auto">
                        {/* Input */}
                        <div className="w-full flex gap-x-6">
                            <input type="text" name="name" placeholder="Name" className="input" />
                            <input type="text" name="email" placeholder="Email" className="input" />
                        </div>
                        <input type="text" placeholder="Subject" className="input" />

                        <textarea placeholder="Message" className="textarea"></textarea>

                        {/* Submit */}
                        <button className="border border-primary max-w-[180px] px-8 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                            <span className="text-primary font-poppins group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                                Let's talk
                            </span>
                            <FontAwesomeIcon
                                icon="fa-solid fa-right-long"
                                className="text-primary -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
