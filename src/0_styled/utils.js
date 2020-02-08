import { css } from 'styled-components'
import styledBreak from 'styled-break'

const config = {
	breakpoints: {
		xs: 0,
		sx: 500,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	},
	sLevel: 3,
}

const { cssR, styledR, styledHOC } = styledBreak(config)

export { cssR, styledR, styledHOC, css }
