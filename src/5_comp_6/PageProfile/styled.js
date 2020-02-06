// eslint-disable-next-line
import styled from 'styled-components/macro'
import React from 'react'
import clsx from 'clsx'
import { stopUndefined } from '1_utils'
import { Exports } from '5_comp_5'
const { Col } = stopUndefined(Exports)

const ColStyledSection = props => {
	const { className, ...otherProps } = props
	return (
		<Col
			className={clsx(className, 'bg-dark-navy-gradient')}
			{...otherProps}
		/>
	)
}

const ColStyledGiftCard = props => {
	const { className, ...otherProps } = props
	return (
		<Col
			className={clsx(className, 'bg-purple-gradient-2 p-2')}
			{...otherProps}
		/>
	)
}

const ColStyledTitle = props => {
	const { className, ...otherProps } = props
	return <Col className={clsx(className, 'mt-3')} {...otherProps} />
}

export { ColStyledSection, ColStyledGiftCard, ColStyledTitle }
