import React, { useState, useEffect, useCallback } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import classnames from 'classnames'

const CheckBoxIcon = props => {
	const { color, icon, onClick, fill, tooltip, tooltip2 } = props
	const [fill_, setFill_] = useState(fill)
	const id = icon.replace(/ /g, '')

	const onClick_ = useCallback(
		e => {
			setFill_(value => !value)
			onClick && onClick(e, setFill_)
		},
		[onClick]
	)

	useEffect(() => {
		setFill_(fill)
	}, [fill])

	return (
		<>
			<Button
				className={classnames(
					{ 'btn-simple': !fill_ },
					'btn-icon btn-round ml-1'
				)}
				color={color}
				type='button'
				onClick={onClick_}
				id={id}>
				<i className={icon} />
			</Button>
			<UncontrolledTooltip delay={0} target={id}>
				{fill_ ? tooltip2 : tooltip}
			</UncontrolledTooltip>
		</>
	)
}

export { CheckBoxIcon }
