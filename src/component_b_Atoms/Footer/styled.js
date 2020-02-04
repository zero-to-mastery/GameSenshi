import styled from 'styled-components'
import { responsiveCssGenerator } from '0_styled'

const titleCss = [
	'&&&{',
	...responsiveCssGenerator({
		xl: 'text-align: left !important;',
		xs: 'text-align: center !important;',
	}),
	'}',
]

const H1Styled = styled.h1`
	${titleCss}
`

const H3Styled = styled.h3`
	${titleCss}
`

console.log(titleCss.join())

export { H1Styled, H3Styled }
