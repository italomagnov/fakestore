/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'saira-stencil-one': ['Saira Stencil One', 'cursive'],
                saira: ['Saira', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
