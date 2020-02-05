import styled from 'styled-components'
import React, { memo, useMemo } from 'react'
import {
	Row as RowRS,
	Col as ColRs,
	Container as ContainerRS,
} from 'reactstrap'
import { responsiveCssGenerator } from '0_styled'

const [Row, Col] = [RowRS, ColRs].map((Comp, i) => {
	return memo(props => {
		const { xs, sx, sm, md, lg, xl, css, ...otherProps } = props

		const Component = useMemo(() => {
			const obj = { xs, sx, sm, md, lg, xl }
			let responsiveness = {}
			for (const props in obj) {
				const value = i === 0 ? 100 / obj[props] : (obj[props] * 100) / 12
				const selector = i === 0 ? '> * ' : ''

				responsiveness[props] =
					obj[props] === undefined
						? undefined
						: obj[props] === '0'
						? `&& ${selector} {
							display:none;
							}`
						: obj[props] === 'auto'
						? `&& ${selector} {
							display:block;
							-ms-flex: 0 0 auto;
							flex: 0 0 auto;
							max-width: 100%;
							}`
						: `&& ${selector} {
						display:block;
						-ms-flex: 0 0 ${value}%;
						flex: 0 0 ${value}%;
						max-width: ${value}%;
						}`
			}
			return styled(Comp)`
				${responsiveCssGenerator(responsiveness)}
				${css}
			`
		}, [xs, sx, sm, md, lg, xl, css])

		return <Component {...otherProps} />
	})
})

const Container = props => {
	return <ContainerRS {...props} />
}

export { Row, Col, Container }
