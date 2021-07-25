//  `tailwind.config.js` file
const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        colors: {
            // gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            yellow: colors.amber,
            green: colors.emerald,
        },
        fontFamily: {
            // sans: ['Graphik', 'sans-serif'],
            // serif: ['Merriweather', 'serif'],
            // 'display': ['Oswald'],
            body: ["Open Sans"],
        },
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
    },
    variants: {
        extend: {
            borderColor: ["focus-visible"],
            opacity: ["disabled"],
        },
    },
};
