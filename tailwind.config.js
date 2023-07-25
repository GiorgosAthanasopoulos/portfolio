/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				customYellow: 'rgb(234, 179, 8)',
				customRed: 'rgb(236, 72, 153)'
			}
		},
	},
	plugins: [],
};
