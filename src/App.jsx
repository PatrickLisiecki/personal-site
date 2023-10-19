import { useState, useEffect } from "react";

// Components
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

// Global Icons
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  faXmark,
  faRightLong,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSquareGithub, faLinkedin, faXmark, faRightLong, faMoon);

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Dark mode toggle */}
      <div className="group fixed bottom-[15px] right-[15px] rounded-full bg-none shadow-bs">
        <button
          onClick={toggleDarkMode}
          className={`${
            darkMode
              ? "bg-white text-black hover:text-blue-500"
              : "bg-black text-white hover:text-blue-500"
          } grid h-[50px] w-[50px] place-items-center rounded-full`}
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
        {/* Tooltip */}
        <span className="absolute right-[50px] top-1/2 mr-[5px] min-w-[150px] -translate-y-1/2 rounded bg-black p-2 text-center text-sm text-white opacity-0 shadow transition-opacity group-hover:opacity-100">
          Toggle Dark Mode
        </span>
      </div>
    </main>
  );
}

export default App;
