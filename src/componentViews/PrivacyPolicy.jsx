import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { stopUndefined } from 'utils'
// reactstrap components
import {
	TabContent,
	TabPane,
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap'

// core components
import { Exports } from 'componentpMultiOrganisms'

const { Footer } = stopUndefined(Exports)

const PrivacyPolicy = props => {
	const [tab, setTab] = useState(1)
	useEffect(() => {
		document.body.classList.add('index-page')
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
		return () => {
			document.body.classList.remove('index-page')
		}
	}, [])
	const toggleTab = (e, index) => {
		e.preventDefault()
		setTab(index)
	}
	return (
		<>
			<Container>
				<Row style={{ height: 200 }}></Row>
				<Row>
					<Col lg='2' md='3'>
						<Nav
							className='nav-pills-primary nav-pills-icons flex-column'
							pills
							role='tablist'>
							<NavItem>
								<NavLink
									className={classnames({
										active: tab === 1,
									})}
									onClick={e => toggleTab(e, 1)}
									href='#pablo'>
									<i className='tim-icons icon-lock-circle' />
									Privacy Policy
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink
									className={classnames({
										active: tab === 2,
									})}
									onClick={e => toggleTab(e, 2)}
									href='#pablo'>
									<i className='tim-icons icon-single-copy-04' />
									Cookie Policy
								</NavLink>
							</NavItem>
						</Nav>
					</Col>
					<Col lg='9' md='8'>
						<TabContent activeTab={'viTabs' + tab}>
							<TabPane tabId='viTabs1'>
								Collaboratively administrate empowered markets via plug-and-play
								networks. Dynamically procrastinate B2C users after installed
								base benefits. <br />
								<br />
								Dramatically visualize customer directed convergence without
								revolutionary ROI.
							</TabPane>
							<TabPane tabId='viTabs2'>
								Efficiently unleash cross-media information without cross-media
								value. Quickly maximize timely deliverables for real-time
								schemas. <br />
								<br />
								Dramatically maintain clicks-and-mortar solutions without
								functional solutions.
							</TabPane>
						</TabContent>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export { PrivacyPolicy }
