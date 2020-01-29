import { css } from 'styled-components'
import { BREAKPOINTS_SX } from 'constantValues'

const hideInMobile = css`
	@media (max-width: ${BREAKPOINTS_SX}px) {
		display: none;
	}
`

export { hideInMobile }
