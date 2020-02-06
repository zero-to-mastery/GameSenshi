import { Col } from 'reactstrap'
import { styledR } from '0_styled'

const ColStyledPlay = styledR(Col)(
	{
		xs: `justify-content: center;`,
		sm: `display: none;`,
	},
	3
)

export { ColStyledPlay }
