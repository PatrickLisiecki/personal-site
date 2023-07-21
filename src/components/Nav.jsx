import { useState } from "react";
import { BiHomeAlt2, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";

const navData = [
    {
        icon: <BiHomeAlt2 />,
        title: "Home",
        link: "#home",
    },
    {
        icon: <BiUser />,
        title: "About",
        link: "#about",
    },
    {
        icon: <BsBriefcase />,
        title: "Projects",
        link: "#projects",
    },
    {
        icon: <BsChatSquare />,
        title: "Contact",
        link: "#contact",
    },
];

export default function Nav() {
    const [active, setActive] = useState(0);

    return (
        <nav className="w-full fixed bottom-2 overflow-hidden z-50 lg:bottom-8">
            <div className="container mx-auto">
                <div className="w-full h-[96px] mx-auto p-5 flex justify-between items-center text-2xl text-white/50 backdrop-blur-2xl rounded-full max-w-[460px] bg-gray-400">
                    {navData.map((item, index) => {
                        return (
                            <a
                                key={index}
                                href={item.link}
                                className={`${
                                    active === index ? "text-sky-400" : "text-white"
                                } w-[60px] h-[60px] flex items-center justify-center hover:text-sky-400 transition-all duration-300`}
                                onClick={() => setActive(index)}
                            >
                                {item.icon}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
