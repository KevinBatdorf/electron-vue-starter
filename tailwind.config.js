module.exports = {
	theme: {
		boxShadow: {
			default: '0 2px 4px 0 rgba(0,0,0,0.10)',
			'sm': '0 2px 10px 0 rgba(0,0,0,.06)',
			'md': '0 5px 15px 5px rgba(0,0,0,.06)',
			'lg': '0 5px 25px rgba(0,0,0,0.17)',
			'xl': '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
			'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
			'outline': '0 0 0 5px rgba(100, 159, 242, 1.00)',
			'none': 'none'
		},
		extend: {
			minHeight: {
				'half': '50vh',
			},
			zIndex: {
				'999': 999,
				'max': 2147483647
			},
		},
	},
	variants: {},
	plugins: [
		require('tailwindcss-transition')({
			standard: 'all .2s ease',
			transitions: {
				'none': 'none',
				'slow': 'all 2s ease',
				'normal-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
				'slow-in-out-quad': 'all 2s cubic-bezier(0.455, 0.03, 0.515, 0.955)'
			}
		})
	]
}
