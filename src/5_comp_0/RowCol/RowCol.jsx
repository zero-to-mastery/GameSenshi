import styled from 'styled-components'
import React, { memo } from 'react'
import { Row as RowRS, Col as ColRs, Container } from 'reactstrap'
import { cssR } from '0_styled'

const [Row, Col] = [RowRS, ColRs].map((Comp, i) => {
	const CompNew = memo(props => {
		//eslint-disable-next-line
		const { xs, sx, sm, md, lg, xl, ...otherProps } = props // prevent xs,sx,sm,md,lg,xl from entering Comp props
		return <Comp {...otherProps} />
	})

	return styled(CompNew)`
		${props => {
			const { xs, sx, sm, md, lg, xl } = props
			const obj = { xs, sx, sm, md, lg, xl }
			let responsiveness = {}
			for (const prop in obj) {
				const value = i === 0 ? 100 / obj[prop] : (obj[prop] * 100) / 12
				const selector = i === 0 ? '> * ' : ''

				responsiveness[prop] =
					obj[prop] === undefined
						? undefined
						: obj[prop] === '0'
						? `${selector} {
							display:none;
							}`
						: obj[prop] === 'auto'
						? `${selector} {
							display:block;
							-ms-flex: 0 0 auto;
							flex: 0 0 auto;
							max-width: 100%;
							}`
						: `${selector} {
						display:block;
						-ms-flex: 0 0 ${value}%;
						flex: 0 0 ${value}%;
						max-width: ${value}%;
						}`
			}
			return cssR(responsiveness)
		}}
	`
})

export { Row, Col, Container }
