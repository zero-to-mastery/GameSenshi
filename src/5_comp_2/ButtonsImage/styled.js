import { styled, responsiveCssGenerator, p_0, p_1, p_2, p_3 } from '0_styled'
import { Exports } from '5_comp_1'
import { stopUndefined } from '1_utils'
const { Button, Col } = stopUndefined(Exports)

const ButtonStyled = styled(Button)`
	&&& {
		${responsiveCssGenerator({
			xs: p_1,
			sm: p_2,
			lg: p_3,
		})}
	}
`

const ColStyled = styled(Col)`
	&&& {
		${responsiveCssGenerator({
			xs: p_0,
			sm: p_1,
			md: p_2,
			lg: p_3,
		})}
	}
`

export { ButtonStyled, ColStyled }
