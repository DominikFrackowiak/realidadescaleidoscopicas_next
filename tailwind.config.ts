import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'--white': '#fff',
				'--lightred': '#fc3951',
				'--red': '#ed0033',
				'--lightblue': '#364ec6',
				'--darkblue': '#2e3192',
			},
			fontFamily: {
				sans: ['Galano Grotesque Regular', 'sans-serif'], // default body font
				'galano-medium': ['Galano Grotesque Medium', 'sans-serif'],
				'galano-semibold': ['Galano Grotesque Semibold', 'sans-serif'],
				tavares: ['Tavares', 'sans-serif'],
			},
			fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
			container: {
				center: true,
				padding: '2rem',
				screens: {
					sm: '100%',
					md: '100%',
					lg: '1024px',
					xl: '1280px',
				},
			},
		},
	},
	plugins: [],
}
export default config
