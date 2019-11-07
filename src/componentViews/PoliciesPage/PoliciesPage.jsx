import React, { useEffect, useState, Fragment } from 'react'
import classnames from 'classnames'
import { stopUndefined } from 'utils'
import { Cookie } from './Cookie'
import { Terms } from './Terms'
import { Privacy } from './Privacy'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
	ROUTE_PAGE_POLICY_COOKIES,
	ROUTE_PAGE_POLICY_TERMS,
	ROUTE_PAGE_POLICY_PRIVACY_POLICY,
} from 'routes'
import {
	TabContent,
	Container,
	Row,
	Col,
	Nav,
	TabPane,
	NavItem,
	NavLink,
} from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'

const { Footer, Link } = stopUndefined(Exports)

const TO = 'to'
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
		[TO]: ROUTE_PAGE_POLICY_PRIVACY_POLICY,
	},
	{
		[NAME]: COOKIE,
		[ICON]: 'fas fa-cookie-bite',
		[POLICY]: Cookie,
		[TO]: ROUTE_PAGE_POLICY_COOKIES,
	},
	{
		[NAME]: TERM,
		[ICON]: 'tim-icons icon-single-copy-04',
		[POLICY]: Terms,
		[TO]: ROUTE_PAGE_POLICY_TERMS,
	},
]

const PoliciesPage = props => {
	const [TabName, setTabName] = useState(() => Privacy)

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
				setTabName(() => Cookie)
				break
			case ROUTE_PAGE_POLICY_TERMS:
				setTabName(() => Terms)
				break
			default:
				setTabName(() => Privacy)
		}
	}, [pathname])
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
									const { [NAME]: name, [ICON]: icon, [TO]: to } = policy
									return (
										<NavLink
											className={classnames({
												active: pathname.toLowerCase() === to.toLowerCase(),
											})}
											to={to}
											tag={Link}>
											<i
												style={{ fontSize: '40px' }}
												className={`tim-icons ${icon}`}
											/>{' '}
											{name}
										</NavLink>
									)
								})}
							</NavItem>
						</Nav>
					</Col>
					<Col lg='9' md='8'>
						<TabContent activeTab={TabName} className='mb-5'>
							<TabPane tabId={TabName}>
								<PerfectScrollbar className='pr-3' style={{ height: 768 }}>
									<TabName />
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
