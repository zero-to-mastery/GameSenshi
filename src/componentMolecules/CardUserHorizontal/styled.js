import styled from 'styled-components'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
import { BREAKPOINTS_SX } from 'constantValues'
import { Col } from 'reactstrap'

const { Section } = stopUndefined(Exports)

const SectionStyled = styled(Section)`
	border: 2px solid #344675;
	z-index: 3;
	@media (max-width: ${BREAKPOINTS_SX}px) {
		display: none;
	}
`

const ColStyledAvatar = styled(Col)`
	&& {
		width: 120px;
	}
`
export { SectionStyled, ColStyledAvatar }
