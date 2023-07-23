import Nav from "./components/Nav";
import Home from "./components/Home";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <main className="w-full min-h-screen bg-white">
            <Nav />
            <Header />
            {/* <Home /> */}
            <Outlet />
        </main>
    );
}

export default App;
