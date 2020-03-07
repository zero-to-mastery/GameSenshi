import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Tooltip } from 'reactstrap'
import clsx from 'clsx'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
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
			<Button
				className={clsx(
					{
						'btn-simple': !checked_,
					},
					'm-1',
					'rounded-lg',

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
				<span
					className={clsx(
						{
							'd-none': loading,
							'd-inline-flex': !loading,
						},
						'align-items-center'
					)}
				>
					{children}
				</span>
				<span
					className={clsx(
						{
							'd-none': !loading,
							'd-inline-flex': loading,
						},
						'align-items-center justify-content-center'
					)}
					style={{ width: '59.813px' }}
				>
					<Loader type='Circles' color='#00BFFF' height='18px' width='18px' />
				</span>
			</Button>
			<Tooltip delay={100} target={id} isOpen={showTooltip} placement='top'>
				{checked_ ? (tooltipOff ? tooltipOff : tooltipOn) : tooltipOn}
			</Tooltip>
		</>
	)
}

export { CheckBoxIcon }
