import { css } from 'styled-components'
import {
	BREAKPOINTS_SX,
	BREAKPOINTS_XS,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	responsiveGenerator,
} from './constants'

const hideInMobile = css`
	@media (max-width: ${BREAKPOINTS_SX}px) {
		display: none;
	}
`

export {
	hideInMobile,
	BREAKPOINTS_SX,
	BREAKPOINTS_XS,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	responsiveGenerator,
}
