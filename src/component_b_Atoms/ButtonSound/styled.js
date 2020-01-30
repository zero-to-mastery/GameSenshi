import { Col } from 'reactstrap'
import { BREAKPOINTS_SX } from 'assets/styled'
import styled from 'styled-components'

const ColStyledHidden = styled(Col)`
	@media (max-width: ${BREAKPOINTS_SX}px) {
		display: none;
	}
`

const ColStyledPlay = styled(Col)`
	@media (max-width: ${BREAKPOINTS_SX}px) {
		justify-content: center;
	}
`

export { ColStyledHidden, ColStyledPlay }
