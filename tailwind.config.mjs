/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
  theme: {
    extend: {
			fontSize: {
				'base': '0.9375rem',
				'3xl': '2rem',
				'4xl': ['2.75rem', '1.3']
			},
			lineHeight: {
				'custom': '1.3'
			},
			boxShadow: {
				outer: '0px 0px 12px 0px rgba(0, 0, 0, 0.20)',			
			},
		},
		colors: {
			'transparent': 'transparent',
			'debug': '#ff0000',
			"grey-surface": "#f5f5f5",
			'black': '#000',
			'white': "#ffffff",
			'neutral-dark': '#0C0D0E',
			'neutral': '#B3B3B3',
			'neutral-light': '#A6A6A6',
			'neutral-ultra-light': '#7A7A7A',
			'primary': '#FFD900'
		},

		fontFamily: {
			inter: ['Inter', 'sans-serif'], // Define Inter as a custom font family
		},		
		fontWeight: {
			light: 300,
			regular: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
		},		



  },
  plugins: [],
};
