export default function Header() {
    return (
        <header className="py-5 shadow-bs">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <a href="#">
                        <span className="h2 text-gray-700">patrick lisiecki</span>
                    </a>
                    <button className="btn text-gray-700 rounded-full border border-gray-700 max-w-[200px] px-6 py-3 flex items-center justify-center overflow-hidden">
                        Work with me
                    </button>
                </div>
            </div>
        </header>
    );
}
