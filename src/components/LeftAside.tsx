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
        <aside className="sticky top-0 hidden h-screen w-20 flex-col justify-between border-r-2 border-divider-secondary text-neutral-light-primary dark:border-divider-primary dark:bg-background dark:text-neutral-dark-primary md:flex">
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
                <div className="group mb-6 flex items-center justify-center">
                    <button
                        onClick={scrollToTop}
                        className="text-neutral-light-primary transition-all duration-300 group-hover:text-accent dark:text-neutral-dark-primary"
                    >
                        <ArrowUp className="h-8 w-8" />
                    </button>
                </div>
            )}
        </aside>
    );
}
