import { useState, useEffect } from "react";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sections
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Toggle dark mode across the document
    useEffect(() => {
        // Apply the selected mode's class to the root HTML element
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <main className="page relative">
            <Header />
            <div className="flex flex-row">
                <aside className="dark:border-divider sticky top-0 hidden h-screen w-20 flex-col items-center justify-center gap-6 border-r-2 border-secondary backdrop-blur-lg dark:bg-dark md:flex"></aside>
                <div className="flex w-full flex-col">
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
                <aside className="dark:border-divider sticky top-0 hidden h-screen w-20 flex-col items-center justify-center gap-6 border-l-2 border-secondary backdrop-blur-lg dark:bg-dark md:flex">
                    <button
                        onClick={toggleDarkMode}
                        className={`${
                            darkMode
                                ? "bg-white text-black hover:text-blue-500"
                                : "bg-black text-white hover:text-blue-500"
                        } grid h-[50px] w-[50px] place-items-center rounded-xl`}
                    >
                        <span>X</span>
                    </button>
                    <span className="absolute right-[50px] top-1/2 mr-[5px] min-w-[150px] -translate-y-1/2 rounded bg-black p-2 text-center text-sm text-white opacity-0 shadow transition-opacity group-hover:opacity-100">
                        Toggle Dark Mode
                    </span>
                </aside>
            </div>
            <Footer />

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
