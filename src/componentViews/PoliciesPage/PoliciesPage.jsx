import React, { useEffect, useState, useCallback } from 'react'
import classnames from 'classnames'
import { stopUndefined } from 'utils'
import { Privacy } from './Privacy'
import { Cookie } from './Cookie'
import { Terms } from './Terms'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
	ROUTE_PAGE_POLICY_PRIVACY_POLICY,
} from 'routes'

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

const { Footer } = stopUndefined(Exports)

const NAME = 'name'
const ICON = 'icon'
const POLICY = 'policy'
const PRIVACY = 'Privacy Policy'
const COOKIE = 'Cookie Policy'
const TERM = 'Terms And Conditions'

const policies = [
	{
		[NAME]: PRIVACY,
		[ICON]: 'tim-icons icon-lock-circle',
		[POLICY]: Privacy,
	},
	{
		[NAME]: COOKIE,
		[ICON]: 'fas fa-cookie-bite',
		[POLICY]: Cookie,
	},
	{
		[NAME]: TERM,
		[ICON]: 'tim-icons icon-single-copy-04',
		[POLICY]: Terms,
	},
]

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
				break
		}
	}, [pathname])
	// const toggleTab = useCallback(e => {
	// 	// * icon :before don't have name prop
	// 	setTab(e.target.name || e.target.parentElement.name)
	// }, [])

	return (
		<>
			<Container className='mt-5 mb-5'>
				<Row style={{ height: 120 }}></Row>
				<Row>
					<Col lg='2' md='3'>
						<Nav
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
											})}
											onClick={toggleTab}>
											<i
												style={{ fontSize: '40px' }}
												className={icon}
												onClick={toggleTab}
											/>
											{name}
										</NavLink>
									)
								})}
							</NavItem>
						</Nav>
					</Col>
					<Col lg='9' md='8'>
						<TabContent activeTab={TabPane} className='mb-5'>
							{/* {policies.map(policy => {
								const { [NAME]: name, [POLICY]: Policy } = policy
								return (
									<TabPane tabId={name}>
										<PerfectScrollbar className='pr-3' style={{ height: 768 }}>
											<Policy />
										</PerfectScrollbar>
									</TabPane>
								)
							})} */}
							<TabPane tabId={name}>
								<PerfectScrollbar className='pr-3' style={{ height: 768 }}>
									<TabPane />
								</PerfectScrollbar>
							</TabPane>
						</TabContent>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export { PoliciesPage }
