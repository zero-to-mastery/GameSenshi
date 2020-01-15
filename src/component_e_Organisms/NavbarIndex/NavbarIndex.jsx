import React, { useState, useEffect } from 'react'
import { stopUndefined } from 'utils'
import { Exports } from 'component_d_Compounds'
import { Collapse, Navbar, Nav, Container } from 'reactstrap'

const widthBreakPoint = 991
const bgColor = 'bg-indigo'

const {
	BrandNavbarStoreUserPropedNavbar,
	ProgressStoreProgress,
	ButtonSignInStoreUserPropedIndexNavbar,
	ButtonSignUpStoreUserPropedIndexNavbar,
	LoaderNavLinkStoreUserPropedNavbar,
	IconNotificationStoreUserPropedNavbar,
	ListNavItemStoreUserPropedNavbarIndex,
	MenuHamburger,
	HeaderCollapsedPropedNavbarIndex,
	DropdownMenuNavbarStoreUserPropedNavbar,
	AvatarUserStoreUser,
	DropdownNavbarStoreUser,
	ListNavItemStoreUserPropedCollapsed,
	ListNavItemStoreUserPropedCollapsedUnsigned,
} = stopUndefined(Exports)

const NAVBAR_COLORED = 'colored'

const NavbarIndex = props => {
	const { children, [NAVBAR_COLORED]: colored } = props

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
			document.documentElement.scrollTop > 330 ||
			document.body.scrollTop > 330
		) {
			setColor(bgColor)
		} else if (
			document.documentElement.scrollTop < 300 ||
			document.body.scrollTop < 300
		) {
			setColor((colored && bgColor) || 'navbar-transparent')
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeColor)
		window.addEventListener('resize', onDimensionChange)
		return () => {
			window.removeEventListener('scroll', changeColor)
			window.removeEventListener('resize', onDimensionChange)
		}
	}, [])

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
			<ProgressStoreProgress />
			<Navbar
				className={(colored && bgColor) || color}
				color-on-scroll='100'
				expand='lg'
			>
				<Container>
					<div className='navbar-translate'>
						{/*small screen size*/}
						<BrandNavbarStoreUserPropedNavbar />
						<Nav className='flex-row' navbar>
							<LoaderNavLinkStoreUserPropedNavbar small>
								<IconNotificationStoreUserPropedNavbar small />
								<ButtonSignUpStoreUserPropedIndexNavbar small />
								<ButtonSignInStoreUserPropedIndexNavbar small />
								<MenuHamburger isOpen={collapseOpen} toggle={toggleCollapse} />
							</LoaderNavLinkStoreUserPropedNavbar>
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
						onExited={onCollapseExited}
					>
						<HeaderCollapsedPropedNavbarIndex
							isOpen={collapseOpen}
							toggle={toggleCollapse}
						/>
						<Nav navbar>
							{(!collapseOpen && collapseExited) || overWidthBreakPoint ? (
								<LoaderNavLinkStoreUserPropedNavbar>
									{/* big screen size or not collapsed*/}
									<ListNavItemStoreUserPropedNavbarIndex />
									<IconNotificationStoreUserPropedNavbar className='d-none d-lg-inline-flex' />
									<DropdownNavbarStoreUser avatar={AvatarUserStoreUser}>
										<DropdownMenuNavbarStoreUserPropedNavbar />
									</DropdownNavbarStoreUser>
									<ButtonSignInStoreUserPropedIndexNavbar />
									<ButtonSignUpStoreUserPropedIndexNavbar />
								</LoaderNavLinkStoreUserPropedNavbar>
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

export { NavbarIndex, NAVBAR_COLORED }
