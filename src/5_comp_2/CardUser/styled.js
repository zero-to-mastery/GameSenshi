import { styled, css, pl_0, pr_0, pl_3, pr_3 } from '0_styled'
import { Exports } from '5_comp_1'
import { stopUndefined } from '1_utils'

const { Col } = stopUndefined(Exports)

const DivStyledHover = styled(
	'div',
	{
		xs: css`
			${props =>
				props.styledHover
					? `transform: scale(1.05);
	    -webkit-transition: transform 0.5s;
			transition: transform 0.5s;`
					: ''} {
				${props =>
					props.styledLeave
						? `transform: scale(1);
				-webkit-transition: transform 0.5s;
				transition: transform 0.5s;`
						: ''}
			}

			:after {
				content: '';
				background: rgb(0, 0, 0, 0);
			}
		`,
	},
	3
)

const TextStyledYellow = styled(
	'h4',
	{
		xs: `color: #ffc72c !important;`,
	},
	3
)

const ColStyledPrice = styled(Col, {
	xs: pl_0,
	sm: pl_3,
})

const ColStyledSound = styled(Col, {
	xs: pr_0,
	sm: pr_3,
})
export { DivStyledHover, TextStyledYellow, ColStyledSound, ColStyledPrice }
