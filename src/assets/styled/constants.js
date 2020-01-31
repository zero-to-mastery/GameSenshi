import { css } from 'styled-components'
const BREAKPOINTS_XS = 500 - 1
const BREAKPOINTS_SX = 576 - 1
const BREAKPOINTS_SM = 768 - 1
const BREAKPOINTS_MD = 992 - 1
const BREAKPOINTS_LG = 1200 - 1

const BPOINTS_XS = 0
const BPOINTS_SX = 500
const BPOINTS_SM = 576
const BPOINTS_MD = 768
const BPOINTS_LG = 992
const BPOINTS_XL = 1200

const responsiveCssGenerator = responsiveness => {
	const { xs, sx, sm, md, lg, xl } = responsiveness
	const mapping = {
		[BPOINTS_XS]: xs,
		[BPOINTS_SX]: sx,
		[BPOINTS_SM]: sm,
		[BPOINTS_MD]: md,
		[BPOINTS_LG]: lg,
		[BPOINTS_XL]: xl,
	}

	let cssString = ''
	for (const props in mapping) {
		if (mapping[props] !== undefined) {
			cssString = `${cssString}
			@media (min-width: ${props}px) {
				${mapping[props]}
		}
			`
		}
	}
	return css`
		${cssString}
	`
}

export {
	BREAKPOINTS_SX,
	BREAKPOINTS_XS,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	responsiveCssGenerator,
}
