import React from 'react'
import { Helmet as HelmetRH } from 'react-helmet'
import { BRAND } from '0_app_flavor'

const Helmet = props => {
	const { title, descr } = props
	return (
		<HelmetRH>
			{title && (
				<title>{`${title !== BRAND ? title + ' | ' : ''}${BRAND}`}</title>
			)}
			{descr && <meta name='description' content={`${descr} | ${BRAND}`} />}
		</HelmetRH>
	)
}

export { Helmet }
