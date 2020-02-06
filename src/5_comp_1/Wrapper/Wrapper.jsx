import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'

const WRAPPER_STATE_OFFSET_TOP = 'offsetTop'

const Wrapper = props => {
	const wrapper = useRef(null)

	const {
		bodyClassName,
		className,
		children,
		[WRAPPER_STATE_OFFSET_TOP]: offsetTop,
		...otherProps
	} = props

	useEffect(() => {
		document.body.classList.add(bodyClassName)
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		return () => {
			document.body.classList.remove(bodyClassName)
		}
	}, [])

	return (
		<div
			className={clsx('wrapper pt-2 pb-5', className)}
			ref={wrapper}
			{...otherProps}
		>
			<div className='w-100' style={{ height: offsetTop }} />
			{children}
		</div>
	)
}

export { Wrapper, WRAPPER_STATE_OFFSET_TOP }
