/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'logland-yellow': {
					'40': 'hsl(54,96%,78%)'
				},
				'logland-brown': {
					'50': 'hsl(0,60%,12%)'
				},
				'logland-green': {
					'50': 'hsl(132,42%,18%)',
					'30': 'hsl(132,42%,36%)'
				},
				'logland-blue': {
					'80': 'hsl(220,78%,18%)',
					'30': 'hsl(220,78%,72%)'
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
}
