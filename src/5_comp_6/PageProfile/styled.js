// eslint-disable-next-line
import styled from 'styled-components/macro'
import React from 'react'
import classnames from 'classnames'
import { stopUndefined } from '1_utils'
import { responsiveCssGenerator, pr_4 } from '0_styled'
import { Exports } from '5_comp_5'
const { Col, Row } = stopUndefined(Exports)

const ColStyledSection = props => {
	const { className, ...otherProps } = props
	return (
		<Col
			className={classnames(className, 'bg-dark-navy-gradient')}
			{...otherProps}
		/>
	)
}

const ColStyledGiftCard = props => {
	const { className, ...otherProps } = props
	return (
		<Col
			className={classnames(className, 'bg-purple-gradient-2 p-2')}
			{...otherProps}
		/>
	)
}

const ColStyledTitle = props => {
	const { className, ...otherProps } = props
	return <Col className={classnames(className, 'mt-3')} {...otherProps} />
}

export { ColStyledSection, ColStyledGiftCard, ColStyledTitle }
