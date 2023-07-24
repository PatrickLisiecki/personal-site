/* eslint-disable react/no-unescaped-entities */

// Contact Info
const contactInfo = [
    {
        title: "Location",
        text: "New York, NY",
        icon: "src/assets/pin.png",
        alt: "Location Pin",
    },
    {
        title: "Email",
        text: "impatricklisiecki@gmail.com",
        icon: "src/assets/at.png",
        alt: "At",
    },
    {
        title: "WhatsApp",
        text: "347.604.5676",
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
                            className="max-w-[80px] max-h-[80px]"
                        />
                    </div>
                    <span className="h2 text-center mb-12">
                        Let's <span className="text-accent">connect.</span>
                    </span>

                    {/* Contact Info */}
                    <div className="w-full flex flex-col justify-evenly lg:flex-row">
                        {contactInfo.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="min-w-[200px] p-4 rounded-[20px] flex flex-col items-center gap-y-2 gap-x-4 lg:flex-row"
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
                                            {item.text}
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
