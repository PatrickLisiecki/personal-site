import Nav from "./components/Nav";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <main className="page relative bg-site bg-cover bg-no-repeat">
            <Nav />
            <Header />
            <Outlet />
        </main>
    );
}

export default App;
