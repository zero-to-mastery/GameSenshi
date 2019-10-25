import React, { useState, useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'componentnCompounds'
// reactstrap components
import { Collapse, Navbar, Nav, Container } from 'reactstrap'

const widthBreakPoint = 991
const bgPurple = 'bg-purple'

const {
	BrandNavbarPropedIndexNavbarStoreUser,
	ProgressCommonStoreProgress,
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
	LoaderNavLinkPropedIndexNavbarStoreUser,
	IconNotificationStoreUserPropedIndexNavbar,
	ListNavItemStoreUserPropedNavbarIndex,
	MenuHamburger,
	HeaderCollapsedPropedNavbarIndex,
	DropdownMenuNavbarStoreUserPropedNavbarIndex,
	AvatarUserStoreUser,
	DropdownNavbarStoreUser,
	ListNavItemStoreUserPropedCollapsed,
	ListNavItemStoreUserPropedCollapsedUnsigned,
} = stopUndefined(Exports)

const NAVBAR_INDEX_HEIGHT_CHANGED = 'heightChanged'

const NavbarIndex = props => {
	const { children, [NAVBAR_INDEX_HEIGHT_CHANGED]: heightChanged } = props

	const [color, setColor] = useState('navbar-transparent')
	const [collapseOpen, setCollapseOpen] = useState(false)
	const [overWidthBreakPoint, setOverWidthBreakPoint] = useState(
		window.innerWidth > widthBreakPoint
	)
	const [collapseExited, setCollapseExited] = useState(true)
	const [collapseOut, setCollapseOut] = useState('')

	const onDimensionChange = () => {
		if (window.innerWidth > widthBreakPoint && !overWidthBreakPoint) {
			setOverWidthBreakPoint(true)
		} else if (window.innerWidth <= widthBreakPoint && overWidthBreakPoint) {
			setOverWidthBreakPoint(false)
		}
	}

	const changeColor = () => {
		if (
			document.documentElement.scrollTop > 299 ||
			document.body.scrollTop > 299
		) {
			setColor(bgPurple)
		} else if (
			document.documentElement.scrollTop < 300 ||
			document.body.scrollTop < 300
		) {
			setColor((heightChanged && bgPurple) || 'navbar-transparent')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeColor)
		window.addEventListener('resize', onDimensionChange)
		return () => {
			window.removeEventListener('scroll', changeColor)
			window.removeEventListener('resize', onDimensionChange)
		}
	})

	const toggleCollapse = () => {
		document.documentElement.classList.toggle('nav-open')
		setCollapseOpen(!collapseOpen)
	}
	const onCollapseEntering = () => {
		setCollapseExited(false)
	}
	const onCollapseExiting = () => {
		setCollapseOut('collapsing-out')
	}
	const onCollapseExited = () => {
		setCollapseExited(true)
		setCollapseOut('')
	}

	return (
		<div className='fixed-top'>
			<ProgressCommonStoreProgress />
			<Navbar
				style={{
					zIndex: 90000,
				}}
				className={(heightChanged && bgPurple) || color}
				color-on-scroll='100'
				expand='lg'>
				<Container>
					<div className='navbar-translate'>
						{/*small screen size*/}
						<BrandNavbarPropedIndexNavbarStoreUser />
						<Nav className='flex-row' navbar>
							<LoaderNavLinkPropedIndexNavbarStoreUser small>
								<IconNotificationStoreUserPropedIndexNavbar small />
								<ButtonSignUpStoreUserPropedIndexNavbar small />
								<ButtonSignInStoreUserPropedIndexNavbar small />
							</LoaderNavLinkPropedIndexNavbarStoreUser>
							<MenuHamburger isOpen={collapseOpen} toggle={toggleCollapse} />
						</Nav>
					</div>
					<Collapse
						className={'justify-content-end ' + collapseOut}
						style={{
							overflow: collapseOpen ? 'hidden' : 'visible',
						}}
						navbar
						isOpen={collapseOpen}
						onEntering={onCollapseEntering}
						onExiting={onCollapseExiting}
						onExited={onCollapseExited}>
						<HeaderCollapsedPropedNavbarIndex
							isOpen={collapseOpen}
							toggle={toggleCollapse}
						/>
						<Nav navbar>
							{(!collapseOpen && collapseExited) || overWidthBreakPoint ? (
								<LoaderNavLinkPropedIndexNavbarStoreUser>
									{/* big screen size or not collapsed*/}
									<ListNavItemStoreUserPropedNavbarIndex />
									<IconNotificationStoreUserPropedIndexNavbar className='d-none d-lg-inline-flex' />
									<DropdownNavbarStoreUser
										avatar={<AvatarUserStoreUser height={36} width={36} />}
										menu={<DropdownMenuNavbarStoreUserPropedNavbarIndex />}
									/>
									<ButtonSignInStoreUserPropedIndexNavbar />
									<ButtonSignUpStoreUserPropedIndexNavbar />
								</LoaderNavLinkPropedIndexNavbarStoreUser>
							) : (
								<>
									{/* small screen size and collapsed*/}
									<ListNavItemStoreUserPropedCollapsed
										onItemClick={toggleCollapse}
									/>
									<ListNavItemStoreUserPropedCollapsedUnsigned
										onItemClick={toggleCollapse}
									/>
								</>
							)}
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
			{children}
		</div>
	)
}

export { NavbarIndex, NAVBAR_INDEX_HEIGHT_CHANGED }
