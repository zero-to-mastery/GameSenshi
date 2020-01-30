import styled from 'styled-components'
import { Exports } from 'component_b_Atoms'
import { stopUndefined } from 'utils'
import { BREAKPOINTS_MD } from 'assets/styled'
import { Col, Row } from 'reactstrap'

const { Section } = stopUndefined(Exports)

const SectionStyled = styled(Section)`
	border: 2px solid #344675;
	z-index: 3;
	border-radius: 50rem;
	/* rounded-pill */
	@media (max-width: ${BREAKPOINTS_MD}px) {
		border-radius: 0.4285rem;
		/* rounded-lg */
	}
`

const DivStyledImage = styled.div`
	height: 120px;
	width: 120px;
`

const RowStyledUsername = styled(Row)`
	text-align: 'left';
	margin-top: 2.5rem;
	@media (max-width: ${BREAKPOINTS_MD}px) {
		margin-top: 1rem;
		text-align: center;
	}
`

const ColStyledBadges = styled(Col)`
	text-align: center;
`

const TextStyledSubscribe = styled.p`
	margin-top: 2.5rem;
	@media (max-width: ${BREAKPOINTS_MD}px) {
		margin-top: 1rem;
	}
`
export {
	SectionStyled,
	DivStyledImage,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
}
