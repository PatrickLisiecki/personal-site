/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        container: {
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1200px",
        },
        extend: {
            colors: {
                neutral: {
                    dark: {
                        primary: "#ffffff",
                        secondary: "#b3b3b3",
                    },
                    light: {
                        primary: "#333333",
                        secondary: "#666666",
                        tertiary: "#999999",
                        muted: "#b3b3b3",
                    },
                },
                divider: {
                    primary: "#404040",
                    secondary: "#D3D3D3",
                },
                accent: "#38BDF8",
                background: "#121212",
                muted: "#2D2D2D",
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
