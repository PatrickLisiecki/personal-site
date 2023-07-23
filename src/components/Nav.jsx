import { useState } from "react";
import { BiHomeAlt2, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const navData = [
    {
        icon: <BiHomeAlt2 />,
        title: "Home",
        link: "/",
    },
    {
        icon: <BiUser />,
        title: "About",
        link: "/about",
    },
    {
        icon: <BsBriefcase />,
        title: "Projects",
        link: "/projects",
    },
    {
        icon: <BsChatSquare />,
        title: "Contact",
        link: "/contact",
    },
];

export default function Nav() {
    const [active, setActive] = useState(0);

    return (
        <nav className="w-full h-max fixed flex flex-col items-center gap-y-4 top-0 bottom-0 z-50 mt-auto xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen">
            <div className="w-full h-[80px] flex justify-between items-center gap-y-10 px-4 py-8 bg-gray-700 text-3xl md:px-40 xl:px-0 xl:flex-col xl:justify-center xl:h-max xl:text-2xl xl:rounded-full backdrop-blur-sm">
                {navData.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            to={item.link}
                            className={`${
                                active === index ? "text-sky-400" : "text-white"
                            } relative flex items-center group hover:text-sky-400 transition-all duration-300`}
                            onClick={() => setActive(index)}
                        >
                            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                                <div className="relative flex items-center p-[6px] rounded-[5px] bg-white text-primary">
                                    <div className="text-base font-semibold leading-none capitalize">
                                        {item.title}
                                    </div>
                                </div>
                            </div>

                            <div>{item.icon}</div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
