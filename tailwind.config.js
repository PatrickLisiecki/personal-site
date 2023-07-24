/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
                primary: "#333333",
                secondary: "#999999",
                accent: "#38BDF8",
            },
            boxShadow: {
                // bs: "0 0 10px rgba(56, 189, 248, 0.5)",
                bs: "0 0 10px rgba(0,0,0,.09)",
            },
            backgroundImage: {
                site: 'url("src/assets/bg-site.svg")',
            },
        },
    },
    plugins: [],
};
