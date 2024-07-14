import { Scale } from "lucide-react";
import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                "3xl": "1800px",
            },
            fontFamily: {
                Morpheus: "var(--font-morpheus)",
                GeistSans: ["GeistSans", "sans-serif"],
            },
            colors: {
                black: {
                    100: "#010000",
                },
                gray: {
                    100: "#646464",
                    200: "#909090",
                },
                gold: {
                    100: "#BC994D",
                },
                brown: {
                    100: "#4D3B1E",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "glass-gradient":
                    "linear-gradient(rgba(0, 0, 0, 0.1) 0%,rgba(188,144,77,0.1) 100%)",
                "radial-faded":
                    "radial-gradient(circle at bottom center,var(--color),transparent 100%)",
            },
            animation: {
                "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
                slide: "slide var(--speed) ease-in-out infinite alternate",
                "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
                "slide-in-right":
                    "slide-in-right 1000ms var(--animation-delay, 0ms) ease-out forwards",
                "slide-in-left":
                    "slide-in-left 1000ms var(--animation-delay, 0ms) ease-out forwards",
                "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
                "modal-fade-in": "modal-fade-in 500ms ease-out",
                "modal-fade-out": "modal-fade-out 500ms ease-in",
                "scale-infinite": "scale-infinite 2s infinite",
            },
            keyframes: {
                "fade-in": {
                    from: { opacity: "0", transform: "translateY(-10px)" },
                    to: { opacity: "1", transform: "none" },
                },
                "slide-in-right": {
                    from: { opacity: "0", transform: "translateX(50%)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "slide-in-left": {
                    from: { opacity: "0", transform: "translateX(-50%)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
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
                "border-beam": {
                    "100%": {
                        "offset-distance": "100%",
                    },
                },
                "modal-fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "modal-fade-out": {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                "scale-infinite": {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.1)" },
                },
            },
        },
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    );

    addBase({
        ":root": newVars,
    });
}

export default config;
