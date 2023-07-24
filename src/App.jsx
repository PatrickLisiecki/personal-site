import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

// Global Icons
import { library } from "@fortawesome/fontawesome-svg-core";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
    faHouse,
    faUserAstronaut,
    faDiagramProject,
    faMessage,
    faXmark,
    faSquareArrowUpRight,
    faArrowRightLong,
    faRightLong,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faGithub,
    faLinkedin,
    faHouse,
    faUserAstronaut,
    faDiagramProject,
    faMessage,
    faXmark,
    faSquareArrowUpRight,
    faArrowRightLong,
    faRightLong
);

function App() {
    return (
        <main className="page relative">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
