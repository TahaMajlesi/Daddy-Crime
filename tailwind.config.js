/**@type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "./scripts/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                FatherFont: ["FatherFont", "sans-serif"],
                // Add more custom font families as needed
            },
        },
    },
    plugins: [],
}