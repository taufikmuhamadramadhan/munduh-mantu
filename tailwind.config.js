/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "index.html"],
    theme: {
        extend: {
            fontFamily: {
                sacramento: ["Sacramento"],
                workSans: ["Work Sans"],
            },
            colors: {
                pinkPrimary: "#F14E95",
                bgPrimary: "#0A0A0A",
            },
            screens: {
                // laptop: {"max": "992px"},
                // tablet: {"max": "768px"},
                // mobile: {"max": "576px"},
            },
            animation: {
                'spin-slow': 'spin 4s linear infinite',
            }
        },
    },
    plugins: [
        require("daisyui"),
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};
