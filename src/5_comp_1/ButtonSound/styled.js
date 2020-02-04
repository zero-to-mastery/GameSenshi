import { Col } from 'reactstrap'
import { responsiveCssGenerator } from '0_styled'
import styled from 'styled-components'

const ColStyledPlay = styled(Col)`
	${responsiveCssGenerator({
		xs: `justify-content: center;`,
		sm: `justify-content: flex-start`,
	})}
`

export { ColStyledPlay }
