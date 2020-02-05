import { css } from 'styled-components'
import styledSC from 'styled-components'
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

const styled = (component, responsivenessObject, specificity = 3) => {
	return (typeof component === 'string'
		? styledSC[component]
		: styledSC(component))`
	 ${'&'.repeat(specificity)} {
		 ${responsiveCssGenerator(responsivenessObject)}
		}
	 `
}

export { responsiveCssGenerator, styled }
