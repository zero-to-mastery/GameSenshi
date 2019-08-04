import React from 'react'

const Header = props => {
	const { children } = props
	return (
		<>
			<header>
				<h2 className='text-uppercase g-font-size-12 g-font-size-default--md g-color-black mb-0'>
					{children}
				</h2>
			</header>
			<hr className='line-info' />
		</>
	)
}

export { Header }
