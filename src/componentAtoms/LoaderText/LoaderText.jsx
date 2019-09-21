import React, { memo } from 'react'
import { NavItem, NavLink } from 'reactstrap'
import Loader from 'react-loader-spinner'

const LABEL_SMALL_STATE_IS_LOADING = 'loading'

const LoaderText = memo(props => {
	const {
		[LABEL_SMALL_STATE_IS_LOADING]: isLoading,
		body,
		children,
		small,
	} = props
	return isLoading ? (
		<NavItem className={`active ${small && 'navbar-toggler'}`}>
			<NavLink disabled href='#pablo' className='p-0 d-flex align-items-center'>
				<Loader type='Hearts' color='#00BFFF' height='36' width='36' />
				&nbsp;&nbsp;{body}
			</NavLink>
		</NavItem>
	) : (
		children
	)
})

export { LoaderText, LABEL_SMALL_STATE_IS_LOADING }
