// eslint-disable-next-line
import styled from 'styled-components'
import React, { memo, useMemo } from 'react'
import {
	Row as RowRS,
	Col as ColRs,
	Container as ContainerRS,
} from 'reactstrap'
import { responsiveCssGenerator } from 'assets/styled'

const [Row, Col] = [RowRS, ColRs].map((Comp, i) => {
	return memo(props => {
		const { xs, sx, sm, md, lg, xl, css, ...otherProps } = props

		const Component = useMemo(() => {
			const obj = { xs, sx, sm, md, lg, xl }
			let responsiveness = {}
			for (const props in obj) {
				const value = i ? (obj[props] * 100) / 12 : 100 / obj[props]
				responsiveness[props] =
					obj[props] === undefined
						? undefined
						: obj[props] === '0'
						? 'display:none;'
						: obj[props] === 'auto'
						? `&&&{
							display:block;
							-ms-flex: 0 0 auto;
							flex: 0 0 auto;
							max-width: 100%;
							}`
						: `&&&{
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
	return <ContainerRS className='p-0' {...props} />
}

export { Row, Col, Container }
