import { useEffect, useState } from "react";

import { ArrowUp, Braces } from "lucide-react";

export default function LeftAside() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <aside className="dark:bg-background border-divider-secondary dark:text-neutral-dark-primary dark:border-divider-primary text-neutral-light-primary sticky top-0 hidden h-screen w-20 flex-col justify-between border-r-2 backdrop-blur-lg md:flex">
            <div className="mt-24 flex flex-col items-center">
                <a
                    href="https://github.com/PatrickLisiecki/personal-site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:text-accent"
                >
                    <Braces />
                </a>
            </div>

            {showScrollButton && (
                <div className="group mb-4 flex items-center justify-center">
                    <button
                        onClick={scrollToTop}
                        className="text-neutral-light-primary dark:text-neutral-dark-primary transition-all duration-300 group-hover:text-accent"
                    >
                        <ArrowUp className="h-8 w-8" />
                    </button>
                </div>
            )}
        </aside>
    );
}
