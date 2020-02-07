import React from 'react'
import { Helmet as HelmetRH } from 'react-helmet'
import { brand } from '0_app_flavor'

const Helmet = props => {
	const { title, descr } = props
	return (
		<HelmetRH>
			{title && (
				<title>{`${title !== brand ? title + ' | ' : ''}${brand}`}</title>
			)}
			{descr && <meta name='description' content={`${descr} | ${brand}`} />}
		</HelmetRH>
	)
}

export { Helmet }
