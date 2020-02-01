import styled from 'styled-components'
import { Exports } from 'component_b_Atoms'
import { stopUndefined } from 'utils'
import { responsiveCssGenerator } from 'styled'
import { Col, Row } from 'reactstrap'

const { Section } = stopUndefined(Exports)

const SectionStyled = styled(Section)`
	border: 2px solid #344675;
	z-index: 3;
	${responsiveCssGenerator({
		xs: `border-radius: 0.4285rem; // rounded-lg`,
		lg: `border-radius: 50rem; // rounded-pill`,
	})}
`

const DivStyledImage = styled.div`
	height: 120px;
	width: 120px;
`

const RowStyledUsername = styled(Row)`
	${responsiveCssGenerator({
		xs: `text-align: center;
		margin-top: 1rem;`,
		lg: `text-align: left;
		margin-top: 2.5rem;`,
	})}
`

const ColStyledBadges = styled(Col)`
	text-align: center;
`

const TextStyledSubscribe = styled.p`
	margin-top: 2.5rem;
	${responsiveCssGenerator({
		xs: `margin-top: 1rem;`,
		lg: `margin-top: 2.5rem;`,
	})}
`
export {
	SectionStyled,
	DivStyledImage,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
}
