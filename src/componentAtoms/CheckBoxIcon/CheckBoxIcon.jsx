import React, { useState, useEffect, useCallback } from 'react'
import { Button, UncontrolledTooltip } from 'reactstrap'
import classnames from 'classnames'

const CheckBoxIcon = props => {
	const { color, icon, onClick, fill, tooltipOn, tooltipOff } = props
	const [fill_, setFill_] = useState(fill)
	const [hover, setHover] = useState(false)
	const [clicked, setClicked] = useState(false)
	const id = icon.replace(/ /g, '')

	const onClick_ = useCallback(
		e => {
			setFill_(!fill_)
			onClick && onClick(e, setFill_)
			setHover(!hover)
			setClicked(true)
		},
		[onClick, fill_, hover]
	)

	useEffect(() => {
		// this is needed when parent component rerender 
		setFill_(fill)
	}, [fill])

	const onMouseEnter = useCallback(() => {
		setHover(!hover)
	}, [hover])

	const onMouseLeave = useCallback(() => {
		!clicked && setHover(!hover)
		setClicked(false)
	}, [hover])

	return (
		<>
			<Button
				className={classnames(
					{ 'btn-simple': hover ? fill_ : !fill_ },
					'btn-icon btn-round ml-1'
				)}
				color={color}
				type='button'
				onClick={onClick_}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				id={id}>
				<i className={icon} />
			</Button>
			{!clicked && (
				<UncontrolledTooltip delay={0} target={id}>
					{fill_ ? (tooltipOff ? tooltipOff : tooltipOn) : tooltipOn}
				</UncontrolledTooltip>
			)}
		</>
	)
}

export { CheckBoxIcon }
