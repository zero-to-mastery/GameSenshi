import { styled } from '0_styled'

const titleCss = {
	xl: 'text-align: left !important;',
	xs: 'text-align: center !important;',
}

const H1Styled = styled('h1', titleCss, 3)

const H3Styled = styled('h3', titleCss, 3)

export { H1Styled, H3Styled }
