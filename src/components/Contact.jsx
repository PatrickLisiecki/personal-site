/* eslint-disable react/no-unescaped-entities */

// Contact Info
const contactInfo = [
    {
        title: "Location",
        text: "New York, NY",
        link: "",
        icon: "src/assets/pin.png",
        alt: "Location",
    },
    {
        title: "Email",
        text: "impatricklisiecki@gmail.com",
        link: "mailto:impatricklisiecki@gmail.com",
        icon: "src/assets/at.png",
        alt: "Email",
    },
    {
        title: "LinkedIn",
        text: "linkedin.com/in/patricklisiecki",
        link: "https://www.linkedin.com/in/patricklisiecki/",
        icon: "src/assets/chat.png",
        alt: "Chat Bubble",
    },
];

export default function Contact() {
    return (
        <div className="section bg-gray-100" id="contact">
            <div className="container mx-auto text-center flex items-center justify-center">
                <div className="flex flex-col w-full">
                    {/* Heading */}
                    <div className="w-full flex justify-center items-center">
                        <img
                            src="src/assets/chat-bubble.png"
                            alt="Chat Bubbles"
                            className="max-w-[75px] max-h-[75px] md:max-w-[125px] md:max-h-[125px]"
                        />
                    </div>
                    <span className="h2 text-center mb-6 lg:mb-12">
                        Let's <span className="text-accent">connect.</span>
                    </span>

                    {/* Contact Info */}
                    <div className="w-full flex flex-col justify-evenly lg:flex-row">
                        {contactInfo.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="min-w-[200px] p-4 rounded-[20px] flex flex-col items-center gap-y-2 gap-x-4 xl:flex-row"
                                >
                                    <div className="w-[100px] h-[100px] p-10 flex justify-center items-center rounded-full p-4 bg-white shadow-bs">
                                        <img
                                            src={item.icon}
                                            alt={item.alt}
                                            className="h-auto max-w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center items-center gap-y-[4px] lg:gap-y-[0px] lg:justify-start lg:items-start">
                                        <span className="text-2xl font-semibold">{item.title}</span>
                                        <span className="text-xl text-secondary cursor-pointer hover:text-accent">
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    {item.text}
                                                </a>
                                            ) : (
                                                item.text
                                            )}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
