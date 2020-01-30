import { css } from 'styled-components'
import {
	BREAKPOINTS_XS,
	BREAKPOINTS_SX,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	BREAKPOINTS_XL,
} from './constants'

const hideInMobile = css`
	@media (max-width: ${BREAKPOINTS_SX}px) {
		display: none;
	}
`

export {
	hideInMobile,
	BREAKPOINTS_XS,
	BREAKPOINTS_SX,
	BREAKPOINTS_SM,
	BREAKPOINTS_MD,
	BREAKPOINTS_LG,
	BREAKPOINTS_XL,
}
