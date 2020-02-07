import styled, { css } from 'styled-components'
import React, { memo } from 'react'

const responsiveCssGenerator = config => {
	const { mapping, min, sLevel } = config

	const cssR = (responsiveness = '') => {
		const type = typeof responsiveness
		if (type === 'string' || Array.isArray(responsiveness)) {
			return responsiveness
		} else if (type === 'object' && responsiveness) {
			let cssString = []
			for (const prop in responsiveness) {
				if (responsiveness[prop] !== undefined && mapping[prop] !== undefined) {
					cssString = [
						...cssString,
						`
			@media (${min ? 'min' : 'max'}-width: ${mapping[prop]}px) {`,
						responsiveness[prop],
						`
		}
			`,
					]
				}
			}
			return cssString
		} else {
			return ''
		}
	}

	const isComponentHtml = component =>
		typeof component === 'string' ? styled[component] : styled(component)

	const specificityWrapper = (responsiveness = '', level = sLevel) => css`
		${'&'.repeat(level)} {
			${cssR(responsiveness)}
		}
	`

	const styledR = comp => (responsiveness = '', level = sLevel) => {
		return isComponentHtml(comp)`
	 ${specificityWrapper(responsiveness, level)}
	 `
	}
	const styledHOC = Comp => (level = sLevel) => {
		const STYLED_CSS = 'styledCss'
		const CompNew = memo(props => {
			//eslint-disable-next-line
			const { [STYLED_CSS]: styledCss, ...otherProps } = props // prevent styledCss from entering Comp props
			return <Comp {...otherProps} />
		})

		return styled(CompNew)`
			${props => {
				const { [STYLED_CSS]: styledCss } = props
				return specificityWrapper(styledCss, level)
			}}
		`
	}

	return { cssR, styledR, styledHOC }
}

const mapping = {
	xs: 0,
	sx: 500,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
}

const config = {
	mapping,
	min: true,
	sLevel: 3,
}

const { cssR, styledR, styledHOC } = responsiveCssGenerator(config)

export { cssR, styledR, styledHOC, css }
