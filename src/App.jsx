import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftAside from "@/components/LeftAside";
import RightAside from "@/components/RightAside";

import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";

import { navData } from "@/data/data";
import { skillsData } from "@/data/data";
import { projectsData } from "@/data/data";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <main className="page relative">
            <Header navData={navData} />
            <div className="flex flex-row">
                <LeftAside />
                <div className="flex w-full flex-col">
                    <Home />
                    <About />
                    <Skills skillsData={skillsData} />
                    <Projects projectsData={projectsData} />
                    <Contact />
                    <Footer />
                </div>
                <RightAside toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </div>

            {/* Dark mode toggle */}
            {/* <div className="group fixed bottom-[15px] right-[15px] rounded-full bg-none shadow-bs">
                <button
                    onClick={toggleDarkMode}
                    className={`${
                        darkMode ? "bg-white text-black hover:text-blue-500" : "bg-black text-white hover:text-blue-500"
                    } grid h-[50px] w-[50px] place-items-center rounded-full`}
                >
                    <FontAwesomeIcon icon={faMoon} />
                </button>
                <span className="absolute right-[50px] top-1/2 mr-[5px] min-w-[150px] -translate-y-1/2 rounded bg-black p-2 text-center text-sm text-white opacity-0 shadow transition-opacity group-hover:opacity-100">
                    Toggle Dark Mode
                </span>
            </div> */}
        </main>
    );
}

export default App;
