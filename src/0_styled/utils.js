import styled, { css } from 'styled-components'

const mediaParser = (
	direction = '',
	sortedBreakpoints = {},
	targetPoint = ''
) => {
	const targetPointValue = sortedBreakpoints[targetPoint]

	const getMaxWidth = targetPointValue => {
		const values = Object.values(sortedBreakpoints)
		const result = values[values.indexOf(targetPointValue) + 1]
		if (result) {
			return result - 0.02 + 'px'
		} else {
			return 'none'
		}
	}

	const minMedia = `@media (min-width: ${targetPointValue}px)`
	const maxMedia = `@media (max-width: ${getMaxWidth(targetPointValue)})`
	switch (direction) {
		case '':
			return minMedia
		case 'm':
			return maxMedia
		case 'o':
			return `${minMedia} and ${maxMedia}`
		default: {
			const targetPointValue2 = sortedBreakpoints[direction]
			if (targetPointValue2) {
				return `${minMedia} and @media (max-width: ${getMaxWidth(
					targetPointValue2
				)})`
			} else {
				return `${minMedia} and @media (max-width: none)`
			}
		}
	}
}

const responsiveCssGenerator = config => {
	const { breakpoints, sLevel } = config

	const sortedBreakpoints = Object.keys(breakpoints)
		.sort((a, b) => {
			return breakpoints[a] - breakpoints[b]
		})
		.reduce((acc, key) => {
			acc[key] = breakpoints[key]
			return acc
		}, {})

	const cssR = (styledCss = '') => {
		const type = typeof styledCss
		if (type === 'string' || Array.isArray(styledCss)) {
			return styledCss
		} else if (type === 'object' && styledCss) {
			let cssString = []
			for (const prop in styledCss) {
				const split = prop.split('_')
				const targetPoint = split[0]
				if (
					styledCss[prop] !== undefined &&
					sortedBreakpoints[targetPoint] !== undefined
				) {
					const direction = split[1] || ''
					cssString = [
						...cssString,
						`
						${mediaParser(direction, sortedBreakpoints, targetPoint)} {`,
						styledCss[prop],
						`
		}
			`,
					]
				}
			}
			return cssString
		} else {
			return ''
		}
	}

	const isComponentHtml = component =>
		typeof component === 'string' ? styled[component] : styled(component)

	const specificityWrapper = (styledCss = '', level = sLevel) => css`
		${'&'.repeat(level)} {
			${cssR(styledCss)}
		}
	`

	const styledR = comp => (styledCss = '', level = sLevel) => {
		return isComponentHtml(comp)`
	 ${specificityWrapper(styledCss, level)}
	 `
	}
	const styledHOC = comp => (level = sLevel) => {
		return styled(comp)`
			${props => {
				const { styledCss } = props
				return specificityWrapper(styledCss, level)
			}}
		`
	}

	return { cssR, styledR, styledHOC }
}

const config = {
	breakpoints: {
		xs: 0,
		sx: 500,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	},
	sLevel: 3,
}

const { cssR, styledR, styledHOC } = responsiveCssGenerator(config)

export { cssR, styledR, styledHOC, css }
