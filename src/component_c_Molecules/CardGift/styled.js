import styled from 'styled-components'
import { BREAKPOINTS_MD } from 'assets/styled'

const ModalBodyWrapper = styled.div`
	padding: 15px;
`

const GridContainer = styled.div`
	margin: 0 auto;
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(5, 48px);
	grid-template-rows: repeat(4, 48px);
	gap: 5px;
	@media (max-width: ${BREAKPOINTS_MD}px) {
		margin: 1rem auto;
	}
`

const GradientContainer = styled.div`
	background: linear-gradient(to right bottom, #667eea, #764ba2) !important;
	width: calc(5 * 48px + 2 * 1rem + 4 * 5px);
	height: auto;
	border-radius: 5px;
`

const ImageWrapper = styled.div`
	width: 48px;
	height: 48px;
	border: 1px solid #000000;
	cursor: pointer;
`

export { ModalBodyWrapper, GridContainer, GradientContainer, ImageWrapper }
