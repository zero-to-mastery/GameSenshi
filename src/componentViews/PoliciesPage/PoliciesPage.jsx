import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { stopUndefined } from 'utils'
import { policyPageTabList } from './index'
import { Cookie } from './Cookie'
import { Terms } from './Terms'
import { Privacy } from './Privacy'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { ROUTE_PAGE_POLICY_COOKIES, ROUTE_PAGE_POLICY_TERMS } from 'routes'
import {
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'

const { Footer, Link } = stopUndefined(Exports)

const NAME = 'name'
const ICON = 'icon'
const POLICY = 'policy'
const PRIVACY = 'Privacy Policy'
const COOKIE = 'Cookie Policy'
const TERM = 'Terms And Conditions'

const PoliciesPage = props => {
	const [TabPane, setTabPane] = useState(() => Privacy)

	useEffect(() => {
		document.body.classList.add('index-page')
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		return () => {
			document.body.classList.remove('index-page')
		}
	}, [])
	const {
		location: { pathname },
	} = props

	useEffect(() => {
		switch (pathname) {
			case ROUTE_PAGE_POLICY_COOKIES:
				setTabPane(() => Cookie)
				break
			case ROUTE_PAGE_POLICY_TERMS:
				setTabPane(() => Terms)
				break
			default:
				setTabPane(() => Privacy)
		}
	}, [pathname])
	console.log("pathname", props)
	return (
		<>
			<Container className='mt-5 mb-5'>
				<Row style={{ height: 120 }}></Row>
				<Row>
					<Col lg='2' md='3'>
						{/* <Nav
							className='nav-pills-primary nav-pills-icons flex-column'
							pills
							role='tablist'>
							<NavItem>
								{policies.map(policy => {
									const { [NAME]: name, [ICON]: icon } = policy
									return (
										<NavLink
											name={name}
											className={classnames({
												active: tab === name,
											})}>
											<i style={{ fontSize: '40px' }} className={icon} />
											{name}
										</NavLink>
									)
								})}
							</NavItem>
						</Nav> */}
						<Nav className='flex-column nav-tabs-info' role='tablist'>
							{/* {policyPageTabList.map((navItem, i) => {
								const { navLink, icon, to } = navItem
								return (
									<Fragment key={to}>
										<NavItem>
											<NavLink
												className={classnames({
													active: pathname.toLowerCase() === to.toLowerCase(),
												})}
												to={to}
												tag={Link}>
												<i className={`tim-icons ${icon}`} /> {navLink}
											</NavLink>
										</NavItem>
										{i + 1 !== policyPageTabList.length && (
											<hr className='line-info' />
										)}
									</Fragment>
								)
							})} */}
						</Nav>
					</Col>
					<Col lg='9' md='8'>
						<TabContent activeTab={TabPane} className='mb-5'>
							{/* {policyPageTabList.map(policy => {
								const { [NAME]: name, [POLICY]: Policy } = policy
								return (
									<TabPane tabId={name}>
										<PerfectScrollbar className='pr-3' style={{ height: 768 }}>
											<Policy />
										</PerfectScrollbar>
									</TabPane>
								)
							})} */}
						</TabContent>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}
export { PoliciesPage }
