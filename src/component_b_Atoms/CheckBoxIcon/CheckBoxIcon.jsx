import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Tooltip } from 'reactstrap'
import classnames from 'classnames'
import { Exports } from 'component_a_Protons'
import { stopUndefined } from 'utils'
import Loader from 'react-loader-spinner'
const { Button } = stopUndefined(Exports)

const CheckBoxIcon = props => {
	const {
		color,
		onClick,
		checked,
		tooltipOn,
		tooltipOff,
		loading,
		className,
		children,
		id,
		...otherProps
	} = props
	const [checked_, setChecked_] = useState(checked)
	const [showTooltip, setShowTooltip] = useState(false)
	const ref = useRef(null)
	const timeoutId = useRef(-1)

	const onClick_ = useCallback(
		e => {
			onClick && onClick(e, ref, setChecked_, checked_)
			if (!tooltipOff) {
				// if tooltip off is not provided, this is not treated as checkbox
				clearTimeout(timeoutId.current)
				setChecked_(state => !state)
				timeoutId.current = setTimeout(() => {
					setChecked_(state => !state)
				}, 150)
			}
		},
		[onClick, ref, tooltipOff, checked_]
	)

	useEffect(() => {
		// this is needed when parent component rerender with props
		setChecked_(checked)
	}, [checked])

	const onMouseEnter = useCallback(() => {
		setShowTooltip(true)
	}, [])

	const onMouseLeave = useCallback(() => {
		setShowTooltip(false)
	}, [])

	return (
		<>
			<div
				className={classnames('m-2', {
					'd-none': !loading,
					'd-inline-flex': loading,
				})}
			>
				<Loader type='Circles' color='#00BFFF' height='30px' width='30px' />
			</div>
			<Button
				className={classnames(
					{ 'btn-simple': !checked_, 'd-none': loading },
					'm-1',
					'rounded-lg',
					'd-flex',
					'align-items-center',
					className
				)}
				ref={ref}
				color={color}
				type='button'
				onClick={onClick_}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				size='sm'
				id={id}
				{...otherProps}
			>
				{children}
			</Button>
			<Tooltip delay={100} target={id} isOpen={showTooltip} placement='top'>
				{checked_ ? (tooltipOff ? tooltipOff : tooltipOn) : tooltipOn}
			</Tooltip>
		</>
	)
}

export { CheckBoxIcon }
