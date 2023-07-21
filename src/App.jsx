import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="w-full min-h-screen bg-white">
            <Nav />
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
