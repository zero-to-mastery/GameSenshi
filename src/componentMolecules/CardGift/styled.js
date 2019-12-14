import styled from 'styled-components'

const ModalBodyWrapper = styled.div`
	padding: 15px;
`

const GridContainer = styled.div`
	margin: 0 auto;
	padding: 3rem 0;
	display: grid;
	grid-template-columns: repeat(5, 64px);
	grid-template-rows: repeat(4, 64px);
	gap: 15px;
`

const GradientContainer = styled.div`
	background: linear-gradient(to right bottom, #667eea, #764ba2) !important;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
`

const ImageWrapper = styled.div`
	width: 64px;
	height: 64px;
	border: 1px solid #000000;
	cursor: pointer;
`

export { ModalBodyWrapper, GridContainer, GradientContainer, ImageWrapper }
