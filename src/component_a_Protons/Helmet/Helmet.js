import React from 'react'
import { Helmet as HelmetRH } from 'react-helmet'

const Helmet = props => {
	const { title, descr } = props
	return (
		<HelmetRH>
			{title && <title>{title}</title>}
			{descr && <meta name='description' content={descr} />}
		</HelmetRH>
	)
}

export { Helmet }
