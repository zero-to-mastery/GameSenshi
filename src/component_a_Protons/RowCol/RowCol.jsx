// eslint-disable-next-line
import styled from 'styled-components'
import React, { memo, useMemo } from 'react'
import { Row as RowRS, Col as ColRs } from 'reactstrap'
import { responsiveCssGenerator } from 'assets/styled'

const [Row, Col] = [RowRS, ColRs].map(Comp => {
	return memo(props => {
		const { xs, sm, md, lg, xl } = props
		const { sx, css, ...otherProps } = props

		const Component = useMemo(() => {
			const obj = { xs, sx, sm, md, lg, xl }
			let responsiveness = {}
			for (const props in obj) {
				responsiveness[props] = obj[props] === '0' ? 'display:none;' : undefined
			}
			return styled(Comp)`
				${responsiveCssGenerator(responsiveness)}
				${css}
			`
		}, [xs, sx, sm, md, lg, xl, css])

		return <Component {...otherProps} />
	})
})

export { Row, Col }
