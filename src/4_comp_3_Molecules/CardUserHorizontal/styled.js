import styled from 'styled-components'
import { responsiveCssGenerator } from '0_styled'
import { Exports } from '4_comp_2_Atoms'
import { stopUndefined } from '1_utils'
const { Container, Col, Row } = stopUndefined(Exports)

const ContainerStyled = styled(Container)`
	border: 2px solid #344675;
	z-index: 3;
	${responsiveCssGenerator({
		xs: `border-radius: 0.4285rem; // rounded-lg`,
		lg: `border-radius: 50rem; // rounded-pill`,
	})}
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
	ContainerStyled,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
}
