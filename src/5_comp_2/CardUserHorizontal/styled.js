import { styledR, mt_3, mt_4 } from '0_styled'
import { Exports } from '5_comp_1'
import { stopUndefined } from '1_utils'
const { Container, Col, Row } = stopUndefined(Exports)

const ContainerStyled = styledR(Container)(
	{
		xs: `border: 2px solid #344675;
		z-index: 3;
		border-radius: 0.4285rem; // rounded-lg`,
		lg: `border-radius: 50rem; // rounded-pill`,
	},
	3
)

const RowStyledUsername = styledR(Row)(
	{
		xs: `text-align: center;
		${mt_3};`,
		lg: `text-align: left;
		${mt_4};`,
	},
	3
)

const ColStyledBadges = styledR(Col)({
	xs: `text-align: center;`,
})

const TextStyledSubscribe = styledR('p')(
	{
		xs: mt_3,
		lg: mt_4,
	},
	3
)

export {
	ContainerStyled,
	RowStyledUsername,
	ColStyledBadges,
	TextStyledSubscribe,
}
