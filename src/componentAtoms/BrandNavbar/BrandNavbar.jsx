import React, { memo } from 'react'
import { Link } from 'react-router-dom'
// reactstrap
import { Media, NavbarBrand } from 'reactstrap'

const NAVBAR_BRAND_ON_ERROR = 'onError'

const BrandNavbar = memo(props => {
	const { [NAVBAR_BRAND_ON_ERROR]: onError, to, logo } = props
	return (
		<NavbarBrand
			data-placement='bottom'
			to={to}
			rel='noopener noreferrer'
			tag={Link}
			className='d-flex align-items-center'>
			<div
				className='avatar'
				style={{
					height: 0,
					width: 48,
					backgroundColor: 'transparent',
				}}>
				<Media
					onError={onError}
					src={logo}
					alt='Game Senshi'
					className='img-raised'
					style={{ height: 48, width: 48 }}
				/>
			</div>
			<div className='d-none d-sm-inline'>&nbsp;&nbsp;&nbsp;GAME SENSHI</div>
		</NavbarBrand>
	)
})

export { BrandNavbar, NAVBAR_BRAND_ON_ERROR }
