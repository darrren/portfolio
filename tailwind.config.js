// const {nextui} = require("@nextui-org/react")
const _ = require('lodash')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
	// important: true,
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
		// "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1440px'
		},
		linearGradientColors: {
      // header: ['#000', '#00000000 90%'],
		},
		// radialGradientSizes: {
		// 	'farthest-corner': 'farthest-corner'
		// },
		// radialGradientColors: {
		// 	'btn-top': ['#8e061b', '#00000000 50%'],
		// },
		// linearBorderGradients: {
		// 	colors: {
		// 		'border': ['#FFFFFF', '#D62C2C', '#FFFFFF']
		// 	},
		// },
		textShadow: {
			'1': '0px 1px 2px rgba(0,0,0,0.5)'
		},
		fontFamily: {
			sans: [
				'Noto Sans TC',
				'Arial',
				'Helvetica',
				'微軟正黑體',
				'Microsoft JhengHei',
				'Heiti TC',
				'LiHei Pro',
				'新細明體',
				'PMingLiU',
				...defaultTheme.fontFamily.sans
			],
		},
		aspectRatio: { // defaults to {}
			'none': 0,
			'square': [1, 1], // or 1 / 1, or simply 1
			'16/9': [16, 9], // or 16 / 9
			'4/3': [4, 3], // or 4 / 3
			'21/9': [21, 9], // or 21 / 9
		},
		borderColor: theme => ({
			...theme('colors')
		}),
		stroke: theme => ({
			...theme('colors')
		}),
		container: {
			center: true,
			padding: '1rem'
		},
		extend: {
			colors: {
				transparent: 'transparent',
			},
			fontSize: {
				'xxs': '10px',
			},
			height: {
        '100svh': '100svh',
        '100lvh': '100lvh',
			},
			scale: {
        '-1': '-1',
				60: '.6',
				70: '.7',
				80: '.8',
			},
		},
	},
	darkMode: "class",
	plugins: [
		// nextui(),
		require("@tailwindcss/forms")({
			strategy: 'class',
		}),
		require('tailwindcss-aspect-ratio'),
		require('tailwindcss-gradients'),
		require('tailwindcss-border-gradients')(),
		require('tailwindcss-textshadow'),
		plugin(function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    }),
		plugin(function({ addComponents, theme, e }) {
			const screens = theme('screens', {})
			const css = {
				'.rendering-auto': {
					'image-rendering': 'auto',
				},
				'.rendering-webkit': {
					'image-rendering': '-webkit-optimize-contrast',
				},
				'.rendering-pixelated': {
					'image-rendering': 'pixelated',
				}
			}

			const mediaQueries = _.map(screens, (width, breakpoint) => {
				let obj = {}
				obj[`@media (min-width: ${width})`] = _.map(css, (val, key) => {
					return {
						[`.${e(`${breakpoint}\:${key.split('.')[1]}`)}`]: val
					}
				})
				return obj
			})

			addComponents([
				css,
				...mediaQueries
			])
		})
	],
}