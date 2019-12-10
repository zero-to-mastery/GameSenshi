import styled from 'styled-components'
import { BREAKPOINTS_SX } from 'constantValues'
import { Col } from 'reactstrap'

const ColStyledSound = styled(Col)`
	&& {
		@media (max-width: ${BREAKPOINTS_SX}px) {
			flex: 0 0 50%;
		}
	}
`

const DivStyledHover = styled.div`
	${props =>
		props.styledHover
			? `
  	transform: scale(1.05);
	-webkit-transition: transform 0.5s;
	transition: transform 0.5s;
  `
			: ''}

	&& {
		${props =>
			props.styledLeave
				? `
      transform: scale(1);
	-webkit-transition: transform 0.5s;
	transition: transform 0.5s;
      `
				: ''}
	}

	&&&:after {
		content: '';
		background: rgb(0, 0, 0, 0);
	}
`

const TextStyledYellow = styled.h4`
	&& {
		color: #ffc72c !important;
	}
`

export { ColStyledSound, DivStyledHover, TextStyledYellow }
