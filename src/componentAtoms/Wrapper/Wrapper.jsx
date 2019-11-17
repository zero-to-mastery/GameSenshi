import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
const Wrapper = props => {
	const wrapper = useRef(null)

	const { bodyClassName, className, children, offsetTop, ...otherProps } = props

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
			className={classNames('wrapper mt-5 mb-5', className)}
			ref={wrapper}
			{...otherProps}
		>
			<div className='w-100' style={{ height: offsetTop }} />
			{children}
		</div>
	)
}

export { Wrapper }
