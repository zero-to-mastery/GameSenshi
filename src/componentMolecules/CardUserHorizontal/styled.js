import styled from 'styled-components'
import { Exports } from 'componentAtoms'
import { stopUndefined } from 'utils'
import { BREAKPOINTS_SX, BREAKPOINTS_MD } from 'constantValues'
import { Col, Row } from 'reactstrap'

const { Section } = stopUndefined(Exports)

const SectionStyled = styled(Section)`
	border: 2px solid #344675;
	z-index: 3;
	@media (max-width: ${BREAKPOINTS_SX}px) {
		display: none;
	}
`

const DivStyledImage = styled.div`
	height: 120px;
	width: 120px;
	@media (max-width: ${BREAKPOINTS_MD}px) {
		margin-top: 2rem;
	}
`

const RowStyledUsername = styled(Row)`
	text-align: 'left';
	@media (max-width: ${BREAKPOINTS_MD}px) {
		margin-top: 2rem;
		text-align: center;
	}
`

const ColStyledBadges = styled(Col)`
	text-align: 'left';
	@media (max-width: ${BREAKPOINTS_MD}px) {
		text-align: center;
	}
`

const TextStyledSubscribe = styled.p`
	@media (max-width: ${BREAKPOINTS_MD}px) {
		margin-top: 2rem;
	}
`
export {
	SectionStyled,
	DivStyledImage,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
}
