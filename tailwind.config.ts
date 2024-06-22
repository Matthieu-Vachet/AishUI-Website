import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Morpheus: "var(--font-morpheus)", // Utilisez un nom de votre choix pour la police
            },
            colors: {
                black: {
                    100: "#171717",
                },
                gray: {
                    100: "#646464",
                    200: "#909090",
                },
                gold: {
                    100: "#BC994D",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "glass-gradient":
                    "linear-gradient(rgba(0, 0, 0, 0.1) 0%,rgba(188,144,77,0.1) 100%)",
            },
            animation: {
                "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
                slide: "slide var(--speed) ease-in-out infinite alternate",
            },
            keyframes: {
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "15%, 35%": {
                        transform: "translateZ(0) rotate(90deg)",
                    },
                    "65%, 85%": {
                        transform: "translateZ(0) rotate(270deg)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
                slide: {
                    to: {
                        transform: "translate(calc(100cqw - 100%), 0)",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
