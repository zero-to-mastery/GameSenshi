import { css } from 'styled-components'
const BREAKPOINTS_XS = 500 - 1
const BREAKPOINTS_SX = 576 - 1
const BREAKPOINTS_SM = 768 - 1
const BREAKPOINTS_MD = 992 - 1
const BREAKPOINTS_LG = 1200 - 1

const responsiveCssGenerator = responsiveness => {
	const { xs, sx, sm, md, lg, xl } = responsiveness
	const mapping = {
		[BREAKPOINTS_XS]: xs,

		[BREAKPOINTS_SX]: sx,

		[BREAKPOINTS_SM]: sm,

		[BREAKPOINTS_MD]: md,

		[BREAKPOINTS_LG]: lg,
	}

	let cssString = xl ? xl : ''
	for (const props in mapping) {
		if (mapping[props] !== undefined) {
			cssString = `${cssString}
			@media (max-width: ${props}px) {
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
