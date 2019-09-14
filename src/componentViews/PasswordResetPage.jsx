import React, { useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'

// core components
import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

const { Footer, FormResetPasswordPropedDefault } = stopUndefined(
	ExportMultiOrganisms
)

const PasswordResetPage = props => {
	const wrapper = useRef(null)

	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		wrapper.current.scrollTop = 0
		document.body.classList.add('reset-page')
		return () => {
			document.body.classList.remove('reset-page')
		}
	}, [])

	return (
		<>
			<div className='wrapper' ref={wrapper}>
				<div className='page-header'>
					<div className='squares square1' />
					<div className='squares square2' />
					<div className='squares square3' />
					<div className='squares square4' />
					<div className='squares square5' />
					<div className='squares square6' />
					<div className='page-header-image' />
					<FormResetPasswordPropedDefault />
				</div>
				<Footer />
			</div>
		</>
	)
}

export { PasswordResetPage }
