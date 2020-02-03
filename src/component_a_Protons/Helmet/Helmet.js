import React from 'react'
import { Helmet as HelmetRH } from 'react-helmet'
import { Brand } from 'utils'

const Helmet = props => {
	const { title, descr } = props
	return (
		<HelmetRH>
			{title && <title>{`${title} | ${Brand}`}</title>}
			{descr && <meta name='description' content={`${descr} | ${Brand}`} />}
		</HelmetRH>
	)
}

export { Helmet }
