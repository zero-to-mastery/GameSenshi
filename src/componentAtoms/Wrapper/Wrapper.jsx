import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
const Wrapper = props => {
	const wrapper = useRef(null)

	const { bodyClassName, className, ...otherProps } = props

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
			className={classNames('mt-5', className)}
			ref={wrapper}
			{...otherProps}
		/>
	)
}

export { Wrapper }
