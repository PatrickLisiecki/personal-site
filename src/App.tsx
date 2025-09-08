import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeftAside from "@/components/LeftAside";
import RightAside from "@/components/RightAside";

import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

import { navData } from "@/data/data";
import { experienceData } from "@/data/data";
import { skillsData } from "@/data/data";
import { projectsData } from "@/data/data";

import { Sun, Moon } from "lucide-react";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <main className="relative">
            <Header navData={navData} />
            <div className="flex flex-row">
                <LeftAside />
                <div className="flex w-full flex-col">
                    <Home />
                    <About />
                    <Experience experienceData={experienceData} />
                    <Skills skillsData={skillsData} />
                    <Projects projectsData={projectsData} />
                    <Contact />
                    <Footer />
                </div>
                <RightAside toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </div>

            <div className="fixed bottom-[20px] right-[20px] z-50 sm:hidden">
                <button
                    onClick={toggleDarkMode}
                    className={`${
                        darkMode
                            ? "bg-white text-black hover:text-yellow-500"
                            : "bg-black text-white hover:text-blue-500"
                    } grid h-[50px] w-[50px] place-items-center rounded-full transition-all duration-300`}
                >
                    {darkMode ? <Sun /> : <Moon />}
                </button>
            </div>
        </main>
    );
}

export default App;
